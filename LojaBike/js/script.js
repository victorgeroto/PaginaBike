function ModalSucess(){
    Swal.fire({
        title: "Produto Adicionado ao Carrinho!",
        text: "Vá para o carrinho ver seu produto.",
      });

  }
  function ModalWarning(){
    Swal.fire({
        title: "Deseja Finalizar a compra?",
        text: "Você tem certeza disso?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Finalizar!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Compra Finalizada!",
            text: "Sua compra foi finalizada com sucesso.",
            icon: "success"
          });
        }
      });
  }
