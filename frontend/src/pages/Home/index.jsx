import { useState } from "react";
import { useForm } from "react-hook-form";
import { getSessionData, logout } from "../../core/utils/auth";
import { makePrivateRequest, makeRequest } from "../../core/utils/request";
import './style.css';

function Form() {
  const { register, handleSubmit, setValue } = useForm();
  const [isCepFound, setIsCepFound] = useState(false);

  const onSubmit = cepRecebido => {
    makeRequest({ url: `https://viacep.com.br/ws/${cepRecebido.cep}/json/`, method: 'GET' })
      .then(response => {
        setIsCepFound(true);
        console.log(response);
        setValue('cepParaBackend', response.data.cep);
        setValue('logradouro', response.data.logradouro);
        setValue('bairro', response.data.bairro);
        setValue('localidade', response.data.localidade);
        setValue('uf', response.data.uf);
      })
  }

  const onSubmitToBackend = dataToBackend => {
    const session = getSessionData();
    const payload = {
      ...dataToBackend,
      user: {
        id: session.userId
      }
    }
    makePrivateRequest({ url: 'http://localhost:8080/searches', method: 'POST', data: payload })
  }

  const handleOnClick = () => {
    logout();
  }

  return (
    <div className="container-geral">
      <div className="container-above">
        <form onSubmit={handleSubmit(onSubmit)} className="form-above">
          <input
            className="input-search-cep"
            type="text"
            placeholder="Insira o CEP desejado!"
            name="cep"
            ref={register({
              required: true,
            })}
          />
          <div className="two-buttons">
            <input type="submit" className="button-search-cep" value="BUSCAR" />
            <button onClick={handleOnClick} className="button-logout">LOGOUT</button>
          </div>
        </form>
      </div>

      {/* {isCepFound && */}
        <div className="container-below">
          <form onSubmit={handleSubmit(onSubmitToBackend)} className="form-below">
            <h1 className="form-below-title">SALVE SUA PESQUISA!</h1>
            <input
              className="input-search-cep-below"
              type="text"
              placeholder="CEP"
              name="cepParaBackend"
              ref={register()}
            />
            <input
              className="input-search-cep-below"
              type="text"
              placeholder="Logradouro"
              name="logradouro"
              ref={register()}
            />
            <input
              className="input-search-cep-below"
              type="text"
              placeholder="Bairro"
              name="bairro"
              ref={register()}
            />
            <input
              className="input-search-cep-below"
              type="text"
              placeholder="Localidade"
              name="localidade"
              ref={register()}
            />
            <input
              className="input-search-cep-below"
              type="text"
              placeholder="UF"
              name="uf"
              ref={register()}
            />
            <button className="button-search-below">ENVIAR</button>
          </form>
        </div>
      {/* } */}
    </div>
  );
}

export default Form;
