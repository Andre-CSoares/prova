const { createApp } = Vue;

createApp({
    data() {
        return {
            heroi: { vida: 100 },
            vilao: { vida: 100 }
        }
    },
    methods: {
        atacar(isHeroi) {
            if (isHeroi) {
                this.vilao.vida -= 10;
                console.log("O herói atacou");
                setTimeout(() => this.acaoVilao('vilaoAtacar'), 2000);
            }
        },
        defender(isHeroi) {
            if (isHeroi) {
                setTimeout(() => this.acaoVilao(''), 2000);
            }
        },
        pocao(isHeroi) {
            if (this.heroi.vida != 100) {
                setTimeout(() => this.heroi.vida += 10, 2000);
                console.log("o heroi está se curando")
            }
        },
        correr(isHeroi) {
            if (isHeroi) {
                this.heroi.vida == 100;
                console.log("heroi esta fugindo");
            }
        },
        acaoVilao(acaoVilao) {
            if (acaoVilao === 'vilaoAtacar' && this.vilaoAtacar) {
                this.vilaoAtacar(true);
                console.log("O vilão contra atacou")
            } else if (acaoVilao === '') {
                console.log("O herói defendeu");
                return;
            } else {
                const acoes = ['vilaoAtacar', 'vilaoDefender', 'vilaoPocao', 'vilaoCorrer'];
                const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
                if (this[acaoAleatoria]) {
                    this[acaoAleatoria](false);
                    console.log(acaoAleatoria);
                } else {
                    console.error('Ação não encontrada:', acaoAleatoria);
                }
            }
        },
        vilaoAtacar(isVilao) {
            if (isVilao) {
                this.heroi.vida -= 20;
            }
        }
    }
}).mount("#app");