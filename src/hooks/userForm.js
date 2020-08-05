import { useState } from 'react';

function useForm(valoreIniciais) {
  const [valores, setValores] = useState(valoreIniciais);

  function setValor(chave, valor) {
    // chave: nome, descricao, cor
    setValores({
      ...valores,
      [chave]: valor, // nome:'valor'
    });
  }

  function handlerChange(infosDoEvento) {
    const { name, value } = infosDoEvento.target;
    setValor(name, value);
  }

  function clearForm() {
    setValores(valoreIniciais);
  }

  return {
    valores,
    handlerChange,
    clearForm,
  };
}

export default useForm;
