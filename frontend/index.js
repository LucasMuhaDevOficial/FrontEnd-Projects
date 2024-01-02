new Vue({
    el: '#app',
    data: {
      nome: '',
      deficiencia: '',
      pessoas: []
    },
    methods: {
      submitForm() {
        if (this.nome && this.deficiencia) {
          this.pessoas.push({
            nome: this.nome,
            deficiencia: this.deficiencia
          });
          this.nome = '';
          this.deficiencia = '';
        } else {
          alert('Por favor, preencha todos os campos.');
        }
      }
    }
  });
  