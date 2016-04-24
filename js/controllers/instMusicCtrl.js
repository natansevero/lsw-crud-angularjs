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

}); //Fim controller
