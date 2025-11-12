import Footer from "@/layout/Footer";
import { Link } from "react-router-dom";

import Callout from "@/components/Callout";
import isotipoVector from '@assets/images/vectors/isotipo.svg';

export default function ServerRules() {
    return (
        <>
            <header className="container mx-auto max-w-(--safe-area) flex flex-col gap-8 py-4 md:py-18 px-4 md:px-0">
                <Link
                    className="flex items-center gap-1 hover:text-(--orange-500) transition-colors duration-150"
                    to="/"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z" />
                    </svg>
                    <p className="font-semibold">Voltar ao site</p>
                </Link>
                <div className="w-full flex flex-col items-center gap-8">
                    <img src={isotipoVector} alt="OMEX — Domine o Mapa!" className="w-20 h-20 md:w-40 md:h-40" />
                    <h1 className="text-2xl md:text-4xl text-(--orange-500)">Regras do Servidor</h1>
                </div>
            </header>
            <main className="container mx-auto max-w-(--safe-area) flex flex-col gap-8 text-(--gray-100) pb-8 md:pb-18 px-4 md:px-0">
                <section className="flex flex-col md:flex-row md:items-center gap-2 text-xs md:text-sm text-(--gray-200) font-semibold">
                    <p>Em vigor desde: 08 de Setembro de 2025</p>
                    <span className="hidden md:block text-(--gray-400)">|</span>
                    <p>Última atualização: 08 de Setembro de 2025</p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">Introdução</h2>
                    <p>
                        O OMEX é um servidor dedicado a proporcionar uma experiência competitiva, centrada em um PvP intenso, justo e divertido. Para garantir a integridade das partidas e a saúde da comunidade, é imperativo que todos os jogadores respeitem estritamente ao presente regulamento. Violações resultarão em aplicação progressiva de penalidades, que podem incluir advertências, suspensões temporárias ou banimento permanente, a critério da administração.
                    </p>
                    <Callout content={<span>Compreender estas regras é importante porque, para jogar no OMEX, <b className="text-(--green-500)">você precisa aceitá-las.</b></span>} type="success" />
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">I. Identificação e Comunicação</h2>
                    <p>
                        <b className="text-(--gray-300)">I.I</b> - É expressamente proibido o uso de nicknames, tags ou qualquer outro identificador que contenham:
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">I</b> - Palavrões ou linguagem obscena.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">II</b> - Termos ofensivos, difamatórios, racistas, homofóbicos ou de qualquer natureza discriminatória.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">III</b> - Referências diretas ou indiretas a outros servidores, comunidades ou produtos.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">I.II</b> - A comunicação deve ser objetiva e orientada para a estratégia de jogo. São consideradas violações graves:
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">I</b> - Insultos, bullying, perseguição, provocações repetitivas ou qualquer forma de comportamento tóxico.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">II</b> - Spam, flood (envio excessivo de mensagens) ou manter microfone aberto com ruídos de ambiente excessivos.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">II</b> - O uso de software para distorcer a voz de modo a prejudicar a clareza e o objetivo da comunicação é vetado.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">II. Integridade Competitiva</h2>
                    <p>
                        <b className="text-(--gray-300)">II.I</b> - O uso de quaisquer <i className="">cheats</i>, <i>hacks</i>, <i>macros</i> automáticos, bots ou ferramentas de terceiros que concedam vantagem injusta resultará em <b className="text-(--orange-500)">BANIMENTO PERMANENTE IMEDIATO</b> e irrevogável.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">II.II</b> - Clãs, equipes ou grupos que conscientemente abriguem, protejam ou se associem a jogadores utilizando meios ilegais estão sujeitos a punição coletiva, incluindo dissolução do grupo e banimento de seus membros.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">II.III</b> - A exploração intencional de qualquer falha no software, mapa ou mecânica de jogo para obter vantagem é estritamente proibida e acarretará em <b className="text-(--orange-500)">BANIMENTO PERMANENTE</b>.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">III. Política de Apuração e Provas</h2>
                    <p>
                        <b className="text-(--gray-300)">III.I</b> - Em partidas oficiais ou sob investigação, recomenda-se que todos os jogadores mantenham gravações (clips) ou evidências de suas jogadas, principalmente abates suspeitos.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">III.II</b> - A falta de provas contundentes por parte de um jogador acusado de violação, quando solicitada pela moderação, poderá ser interpretada como agravante e resultar em punição sumária.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">IV. Interação com a Comunidade e Conteúdo</h2>
                    <p>
                        <b className="text-(--gray-300)">IV.I</b> - É vedada a divulgação não autorizada de servidores, comunidades, websites, produtos ou serviços externos no chat ou em perfis de usuário no servidor.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">IV.II</b> - Jogadores com tags ou cargos especiais que promovam conteúdo externo de forma não autorizada perderão seu cargo e estarão sujeitos a sanções.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">IV.III</b> - Atrapalhar intencionalmente gravações, transmissões ao vivo (streams) ou quaisquer atividades de criadores de conteúdo é passível de banimento permanente. Isso inclui perseguição (stream sniping), insultos direcionados ou qualquer ação para prejudicar a atividade.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">V. Ética e Conduta Competitiva</h2>
                    <p>
                        <b className="text-(--gray-300)">V.I</b> - A vitória deve ser conquistada com base na habilidade, estratégia e trabalho em equipe, dentro dos limites estabelecidos pelas regras. Condutas antiéticas são intoleráveis.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">V.II</b> - É terminantemente proibido se passar por membro da staff, disseminar informações falsas sobre regras, vantagens ou qualquer aspecto do jogo para enganar adversários.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">V.III</b> - Utilizar informações obtidas através da visualização da transmissão ao vivo de um adversário para obter vantagem competitiva é uma violação grave e resultará em banimento.
                    </p>
                </section>
            </main >
            <Footer />
        </>
    )
}