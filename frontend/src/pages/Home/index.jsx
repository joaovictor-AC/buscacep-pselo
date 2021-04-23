import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getSessionData, logout } from "../../core/utils/auth";
import history from "../../core/utils/history";
import { makePrivateRequest, makeRequest } from "../../core/utils/request";
import './style.css';
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineHistory, AiOutlineSearch } from "react-icons/ai";

function Form() {
  const { register, handleSubmit, setValue, errors } = useForm();

  const onSubmit = cepRecebido => {
    console.log(cepRecebido)
    makeRequest({ url: `https://viacep.com.br/ws/${cepRecebido.cep}/json/`, method: 'GET' })
      .then(response => {
        setValue('cepParaBackend', response.data.cep);
        setValue('logradouro', response.data.logradouro);
        setValue('bairro', response.data.bairro);
        setValue('localidade', response.data.localidade);
        setValue('uf', response.data.uf);
      })
      .catch(() => {
        toast.error("Falha ao fazer pesquisa de CEP!")
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
    .then(() => {
      toast.info("Pesquisa cadastrada!")
    })
    .catch(() => {
      toast.error("Falha ao cadastrar pesquisa!")
    })
  }

  const handleOnClick = () => {
    logout();
  }

  const handleOnClickHistory = () => {
    history.push('/searches')
  }

  return (
    <div className="container-geral">
      <div className="container-above">
        <form onSubmit={handleSubmit(onSubmit)} className="form-above">
          <div className="input-and-error">
            <input
              className={`input-search-cep ${errors.cep ? 'invalid-input' : ''}`}
              type="number"
              placeholder="Insira o CEP desejado!"
              name="cep"
              ref={register({
                required: "Campo obrigatório",
                pattern: {
                  value: /^[a-zA-Z0-9]{8}$/i,
                  message: "CEP deve ter 8 caracteres"
                }
              })}
            />
            {errors.cep && (
              <small className="invalid-cep">
                {errors.cep.message}
              </small>
            )}
          </div>
          <div className="two-buttons">
            <input type="submit" className="button-search-cep" value="BUSCAR" />
            <button onClick={handleSubmit(onSubmit)} className="button-search-cep-icon" ><AiOutlineSearch className="icon-search-react-icon"/></button>
            <button onClick={handleOnClickHistory} className="button-history">HISTÓRICO</button>
            <button onClick={handleOnClickHistory} className="button-history-icon"><AiOutlineHistory className="icon-history-react-icon" /></button>
          </div>
            <button onClick={handleOnClick} className="button-logout">LOGOUT</button>
            <button onClick={handleOnClick} className="button-logout-icon"><HiOutlineLogout className="icon-logout-react-icon" /></button>
        </form>
      </div>

      <div className="container-below">
        <div className="content-home">
          <form onSubmit={handleSubmit(onSubmitToBackend)} className="form-below">
            <h1 className="form-below-title">SALVE SUA PESQUISA!</h1>
            <input
              className="input-search-cep-below block-input-below"
              type="text"
              placeholder="CEP"
              name="cepParaBackend"
              ref={register()}
              disabled="disabled"
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
              className="input-search-cep-below block-input-below"
              type="text"
              placeholder="Localidade"
              name="localidade"
              ref={register()}
              disabled="disabled"
            />
            <input
              className="input-search-cep-below block-input-below"
              type="text"
              placeholder="UF"
              name="uf"
              ref={register()}
              disabled="disabled"
            />
            <button className="button-search-below">ENVIAR</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
