const { createApp } = Vue;

createApp({
    data() {
        return {
            heroi: { vida: 100, poçõesUsadas: 0 },
            vilao: { vida: 100 },
        }
    },
    methods: {
        atacar(isHeroi) {
            if (isHeroi) {
                const vilaoDefender = [8, 10];
                const dado = vilaoDefender[Math.floor(Math.random() * vilaoDefender.length)];
                console.log(dado);
                if (dado != 10) {
                    const preview = [6, 8, 10];
                    const dano = preview[Math.floor(Math.random() * preview.length)];
                    console.log("O herói atacou");
                    setTimeout(() => {
                        this.vilao.vida -= dano;
                        console.log("O vilão sofreu " + dano + " de dano.");
                    }, 2000);
                } else {
                    console.log("O vilão defendeu o ataque do herói");
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
                        console.log("O herói está se curando. Vida atual do herói: " + this.heroi.vida + ". Cura recebida: " + cura);
                        this.heroi.poçõesUsadas++;
                        console.log("O herói usou uma poção. Poções usadas: " + this.heroi.poçõesUsadas);
                    } else {
                        console.log("A vida do herói já está cheia. Não é possível usar mais poções.");
                    }
                } else {
                    console.log("O herói já usou o máximo de poções permitidas.");
                }
            }
        },
        correr(isHeroi) {
            if (isHeroi) {
                console.log("heroi esta fugindo");
            }
        },
        acaoVilao(acaoVilao) {
            if (acaoVilao === 'vilaoAtacar' && this.vilaoAtacar) {
                this.vilaoAtacar(true);
                console.log("O vilão contra atacou");
            } else if (acaoVilao === '') {
                console.log("O herói defendeu");
                return;
            } else if (acaoVilao === 'vilaoPocao') {
                this.vilaoPocao(true);
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
                const preview = [10, 15];
                const dano = preview[Math.floor(Math.random() * preview.length)];
                this.heroi.vida -= dano;
            }
        },
        vilaoDefender() {
            console.log("O vilão riu de sua tentativa de ataque")
        },
        vilaoPocao() {
            if (this.vilao.vida <= 100) {
                this.vilao.vida += 10;
                console.log("O vilão se curou. Vida atual do vilão: " + this.vilao.vida);
            }
        },
        vilaoCorrer(){
            console.log("O vilão fugiu");
        }
    }
}).mount("#app");