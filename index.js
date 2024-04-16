const { createApp } = Vue;

createApp({
    data() {
        return {
            heroi: {vida: 100},
            vilao: {vida: 100}
        }
    },
    methods: {
        atacar(isHeroi) {
            if(isHeroi) {
                this.vilao.vida -= 10;
                setTimeout(() => this.acaoVilao(), 2000);
            } else {
                this.heroi.vida -= 20;
            }
        },
        defender(isHeroi) {
            this.acaoVilao();
        },
        usarPocao(isHeroi) {
            this.acaoVilao();
        },
        correr(isHeroi) {
            this.acaoVilao();
        },
        acaoVilao() {
            const acoes = ['atacar', 'defender', 'usarPocao', 'correr'];
            const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
            this[acaoAleatoria](false);b
        }
    }
}).mount("#app");