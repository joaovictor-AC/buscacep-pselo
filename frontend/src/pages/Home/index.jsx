import { useState } from "react";
import { useForm } from "react-hook-form";
import { getSessionData } from "../../core/utils/auth";
import { makePrivateRequest, makeRequest } from "../../core/utils/request";

function Form () {
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

    return(
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="CEP"
            name="cep"
            ref={register({
              required: true,
            })}
          />
          <input type="submit"/>
        </form>
        {isCepFound && 
          <form onSubmit={handleSubmit(onSubmitToBackend)}>
          <input
            type="text"
            placeholder="CEP"
            name="cepParaBackend"
            ref={register({
              required: true,
            })}
          />
          <input
            type="text"
            placeholder="Logradouro"
            name="logradouro"
            ref={register({
              required: true,
            })}
          />
          <input
            type="text"
            placeholder="Bairro"
            name="bairro"
            ref={register({
              required: true,
            })}
          />
          <input
            type="text"
            placeholder="Localidade"
            name="localidade"
            ref={register({
              required: true,
            })}
          />
          <input
            type="text"
            placeholder="UF"
            name="uf"
            ref={register({
              required: true,
            })}
          />
          <input type="submit"/>
        </form>
        }
    </>
    );
}

export default Form;
