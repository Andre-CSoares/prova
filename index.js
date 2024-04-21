
const { createApp } = Vue;

createApp({
    data() {
        return {
            heroi: { vida: 100, poçõesUsadas: 0 },
            vilao: { vida: 100, dano: 15 },
        }
    },
    methods: {
        exibirMensagem(mensagem) {
            document.getElementById('mensagem').innerHTML = mensagem;
        },
        atacar(isHeroi) {
            if (isHeroi) {
                const vilaoDefender = [8, 10];
                const dado = vilaoDefender[Math.floor(Math.random() * vilaoDefender.length)];
                if (dado != 10) {
                    const preview = [6, 8, 10];
                    const dano = preview[Math.floor(Math.random() * preview.length)];
                    this.exibirMensagem("O herói atacou");
                    setTimeout(() => {
                        this.vilao.vida -= dano;
                        this.exibirMensagem("O vilão sofreu " + dano + " de dano.");
                    }, 2000);
                } else {
                    this.exibirMensagem("O vilão defendeu o ataque do herói");
                    setTimeout(() => {
                        this.acaoVilao();
                    }, 2000);
                }
                setTimeout(() => this.acaoVilao('vilaoAtacar'), 2000);
            }
        },
        defender(isHeroi) {
            if (isHeroi) {
                setTimeout(() => this.acaoVilao(''), 2000);
            }
        },
        pocao(isHeroi) {
            if (isHeroi) {
                if (this.heroi.poçõesUsadas < 5) {
                    if (this.heroi.vida < 100) {
                        const vidaAntes = this.heroi.vida;
                        setTimeout(() => this.heroi.vida = Math.min(this.heroi.vida + 10, 100), 2000);
                        const cura = this.heroi.vida - vidaAntes;
                        this.exibirMensagem("O herói está se curando. \n Vida atual do herói: " + this.heroi.vida + ". \n Cura recebida: " + cura);
                        this.heroi.poçõesUsadas++;
                        this.exibirMensagem("O herói usou uma poção.\n Poções usadas: " + this.heroi.poçõesUsadas);
                    } else {
                        this.exibirMensagem("A vida do herói já está cheia.\n Não é possível usar mais poções.");
                    }
                } else {
                    this.exibirMensagem("O herói já usou o máximo de poções permitidas.");
                }
            }
        },
        correr(isHeroi) {
            if (isHeroi) {
                this.exibirMensagem("heroi esta fugindo");
            }
        },
        acaoVilao(acaoVilao) {
            if (acaoVilao === 'vilaoAtacar' && this.vilaoAtacar) {
                this.vilaoAtacar(true);
                this.exibirMensagem("O vilão contra atacou");
            } else if (acaoVilao === '') {
                this.exibirMensagem("O herói defendeu");
                return;
            } else if (acaoVilao === 'vilaoPocao') {
                this.vilaoPocao(true);
            } else {
                const acoes = ['vilaoAtacar', 'vilaoDefender', 'vilaoPocao', 'vilaoCorrer'];
                const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
                if (this[acaoAleatoria]) {
                    this[acaoAleatoria](false);
                } else {
                    console.error('Ação não encontrada:', acaoAleatoria);
                }
            }
        },
        vilaoAtacar(isVilao) {
            if (isVilao) {
                this.heroi.vida -= this.vilao.dano;
            }
        },
        vilaoDefender() {
            this.exibirMensagem("O vilão riu de sua tentativa de ataque")
        },
        vilaoCurar() {
            if (this.vilao.vida < 100) {
                const vidaAntes = this.vilao.vida;
                setTimeout(() => {
                    this.vilao.vida = Math.min(this.vilao.vida + 10, 100);
                    const cura = this.vilao.vida - vidaAntes;
                    this.exibirMensagem("O vilão está se curando.\n Vida atual do vilão: " + this.vilao.vida + ".\n Cura recebida: " + cura);
                }, 2000);
            } else {
                this.exibirMensagem("A vida do vilão já está cheia.\n Não é possível curá-lo mais.");
            }
        },
        vilaoCorrer() {
            this.exibirMensagem("O vilão fugiu");
        }
    }
}).mount("#app");