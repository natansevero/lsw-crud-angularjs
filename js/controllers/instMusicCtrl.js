angular.module("instMusic").controller("instMusicCtrl", function($scope){

  $scope.instrumentos = [
    {produto: "Violão", marca: "Deval", preco: 250, cor: "Branco"},
    {produto: "Guitarra", marca: "Les Paul", preco: 750, cor: "Preto"},
    {produto: "Amplificador", marca: "Marshall", preco: 300, cor: "Preto"},
    {produto: "Baixo", marca: "Tagima", preco: 550, cor: "Azul"},
    {produto: "Violino", marca: "Eagle", preco: 3050, cor: "Castanho"}
  ];

  $scope.cadastrarInstrumento = function(instrumento){
    $scope.instrumentos.push(angular.copy(instrumento));
    delete $scope.instrumento;
    $scope.cadastroForm.$setPristine();
  };

  //Editar, index
  $scope.editarInstrumento = function(instrumentos){
    $scope.instEditar = instrumentos.filter(function(instrumento){
      if(instrumento.selecionado){
        return instrumento;
      }
    });
  };

  $scope.habBotaoEditar = function(instrumentos){
    var cont = 0;
    var testeDeHab = instrumentos.filter(function(instrumento){
      if(instrumento.selecionado){
        cont++;
      }
    });
    if(cont === 1){
      return true;
    } else {
      return false;
    }
    // delete $scope.i;
  };

  //Excluir
  $scope.excluirInstrumento = function(instrumentos){
    $scope.instrumentos = instrumentos.filter(function(instrumento){
      if(!instrumento.selecionado){
        return instrumento;
      }
    });
  };

  $scope.habBotaoExcluir = function(instrumentos){
    return instrumentos.some(function(instrumento){
      return instrumento.selecionado;
    });
  };

}); //Fim controller
