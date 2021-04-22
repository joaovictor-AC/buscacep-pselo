import { useForm } from "react-hook-form";

function Form () {
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = cepRecebido => {
        console.log("Recebido");
    }

    return(
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

    );
}

export default Form;
