export default function Post1() {
    return(
        <div className="px-5 py-16 -mt-2 bg-white">
            <h1 className="text-4xl font-extrabold text-center ">Você sabe o que é FIV e FELV?</h1>
            <p className="py-3 text-sm font-light text-center text-gray-500">
                Se você tem gatos, provavelmente já ouviu falar de FIV e FELV. Essas doenças acometem muitos felinos e, infelizmente, podem ser fatais.
            </p>
            <div className="w-full py-5 text-xs text-gray-500">
                <span className="mr-16 text-left">Karen Garcia da Silva</span>
                <span className="ml-16 text-right">19 de setembro de 2020</span>
            </div>

            <img src=" https://www.petlove.com.br/dicas/wp-content/uploads/2021/11/gato-doente-petlove.jpg" className="w-full h-full rounded-lg" />
            <section className="py-7">
                <h2 className="text-3xl font-bold text-left">FIV: O vírus da "Aids Felina"</h2>
                <p className="py-3 text-sm font-light">A FIV é o vírus da imunodeficiência felina que, como o próprio nome diz, tem características semelhantes ao vírus da AIDS humana. A FIV é transmitida através de mordidas profundas entre gatos e relação sexual. Gatos com FIV não transmitem o vírus pelo contato, compartilhamento de vasilhas de água ou comida e lambedura.</p>
                <p className="py-3 text-sm font-light">O vírus da FIV pode causar febre, anemia, emagrecimento, falta de apetite, mudanças no comportamento e outros sinais como: Gengivites, úlceras na boca, doenças na pele, doença nos olhos, problemas respiratórios e problemas gastrointestinais (vômitos e diarréias). </p>
                <p className="py-3 text-sm font-light">O diagnóstico da FIV se dá através de uma avaliação clínica realizada por um médico-veterinário e por exames e testes realizados dentro do consultório. nfelizmente, a FIV não tem cura. Mas alguns gatos podem viver muito bem por meses e até anos, desde que estejam com sua imunidade sob controle, e principalmente não estejam passando por situações estressantes.</p>
            </section>

            <img src="https://www.petlove.com.br/dicas/wp-content/uploads/2020/05/Gato-doente-Petlove.jpg" className="w-full h-full rounded-lg" />
            <section className="py-7">
                <h2 className="text-3xl font-bold text-left">FELV: Leucemia Viral Felina</h2>
                <p className="py-3 text-sm font-light">O vírus da FELV (Leucemia Felina) é altamente contagioso e, diferentemente da FIV, pode ser transmitido por contato direto. Ou seja, comer na mesma vasilha, beber no mesmo pote de água, usar a mesma caixa de areia e se lamber. Ele também é transmitido por contato sexual e as fêmeas gestantes infectadas também podem transmitir para os seus filhotes.</p>
                <p className="py-3 text-sm font-light">Os sinais clínicos são bem variados, e podem incluir: febre, perda de peso, perda de apetite, alterações gastroinstestinais, anemiias, diversas neoplasias, alterações no comportamento.</p>
                <p className="py-3 text-sm font-light">Assim como na FIV, o diagnóstico da FELV é realizado durante uma consulta com um médico-veterinario, por meio de exames e um teste rápido co o sanguee do gatinho e que pode ser realizado ali durante o atendimento.</p>
                <p className="py-3 text-sm font-light">Já existe uma vacina contra o vírus da FELV, e o seu gatinho a partir dos 60 dias de idade já que pode iniciar o seu protocolo vacinal. Infelizmente, para o vírus da FIV, todas as vacinas produzidas não foram eficazes até o momento.</p>
            </section>
        </div>
    )
}