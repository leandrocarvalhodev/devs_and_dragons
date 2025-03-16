import { Mago } from "./modules/mago.js"
import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3 )
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroLeo = new Arqueiro('Leo', 8, 10)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)
const guerreiroJorge = new Guerreiro('Jorge', 5)


const personagens = [magoAntonio, magaJulia, arqueiroLeo, arqueiroMagoChico, guerreiroJorge]

new PersonagemView(personagens).render()
// console.log(Personagem.verificarVencedor(arqueiroLeo, magoAntonio))

