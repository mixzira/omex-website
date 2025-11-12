import Footer from "@/layout/Footer";
import { Link } from "react-router-dom";

import Callout from "@/components/Callout";
import LinkComponent from "@/components/LinkComponent";
import RouleTab from "@/components/RouleTab";
import Timeline from "@/components/Timeline";
import isotipoVector from '@assets/images/vectors/isotipo.svg';

const steps = [
    {
        number: 1,
        title: "Primeira punição",
        description: "Restrição de uso por até 3 dias.",
        color: "bg-(--orange-500)",
    },
    {
        number: 2,
        title: "Segunda punição",
        description: "Restrição de uso por até 7 dias.",
        color: "bg-(--orange-500)",
    },
    {
        number: 3,
        title: "Terceira punição",
        description: "Restrição de uso por até 30 dias.",
        color: "bg-(--orange-500)",
    },
    {
        number: 4,
        title: "Aqui acabam as suas chances...",
        description: "Restrição COMPLETA permanente e/ou por tempo indefinido.",
        color: "bg-(--orange-500)",
        highlight: true,
    },
]

export default function DiscordRules() {
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
                    <h1 className="text-2xl md:text-4xl text-(--orange-500)">Regras do Discord</h1>
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
                        Nosso servidor no Discord é a principal plataforma de comunicação com a nossa comunidade de jogadores. Nele, você ficará por dentro de todas as novidades, como eventos, atualizações e muito mais. Além disso, terá acesso ao nosso suporte e poderá interagir, tirar dúvidas e se conectar com outros jogadores.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">Cargos e responsabilidades da nossa equipe</h2>
                    <RouleTab />
                    <Callout content="Cada um dos cargos acima apresentados possui um líder, o qual é responsável por supervisionar e coordenar todos os membros de sua equipe, garantindo que as tarefas sejam executadas corretamente, oferecendo orientação quando necessário e tomando decisões para melhorar a eficiência e o ambiente do servidor." type="info" />
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">Regras e diretrizes</h2>
                    <Callout content={<span className="inline-block">
                        Nosso servidor segue as <LinkComponent text="Diretrizes comunitárias" type="external" to="https://discord.com/guidelines" target="_blank" color="text-(--green-500)" />, bem como os <LinkComponent text="Termos de Serviço" type="external" to="https://discord.com/terms" target="_blank" color="text-(--green-500)" /> do Discord.
                    </span>} type="success" />
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">I - Avatares, Banners e Nicknames</h2>
                    <p>
                        <b className="text-(--gray-300)">I.I</b> - É proibido o uso de avatares, banners e apelidos que, contenham linguagem ofensiva ou discriminatória contra uma etnia, nacionalidade, orientação sexual, gênero ou religião. Apelidos que incitem o ódio ou contenham elementos de violência, do terrorismo ou do extremismo e etc.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">I.II</b> - É proibido o uso de avatares, banners e apelidos que, contenham elementos a grupos terroristas, extremistas, nazistas, conteúdos sexuais explícitos, entre outros fatores.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">II - Publicações e mensagens</h2>
                    <p>
                        <b className="text-(--gray-300)">II.I</b> - É proibida a publicação de mensagem com práticas de quaisquer tipos de discriminação, insultos ou provocações.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">II.II</b> - É proibida a publicação de mensagens contendo informações falsas e/ou que levem a uma errônea interpretação da realidade.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">II.III</b> - É proibida a publicação de mensagens contendo informações e materiais de natureza sexual, erótica ou pornográfica, ilustrando ou descrevendo relações sexuais ou práticas de desvios sexuais, bem como divulgar links de conteúdo pornográfico.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">II.IV</b> - É proibida a publicação de mensagens contendo quaisquer tipo propaganda ou demonstração de emblemas ou símbolos nazistas, abreviaturas ou designações, nomes e sobrenomes de ativistas nazistas.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">II.V</b> - É proibida a publicação de mensagens que contenham informações que descrevam, instiguem ou justifiquem comportamento ilegal, criminoso, violento, ou que contenha mutilação, crueldade psíquica ou física de pessoas, animais, ou causando danos à propriedade alheia.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">II.VI</b> - É proibida a publicação de mensagens afim da prática de quaisquer tipo de spam de mensagens, emojis, entre outros.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">III - Divulgação</h2>
                    <p>
                        <b className="text-(--gray-300)">III.I</b> - É proibida a prática de quaisquer forma de propaganda, divulgação de produto, serviço ou servidor. Em nosso servidor do Discord ou no privado dos nossos membros (DM), salvo exceto a divulgação de vídeos, imagens ou livestreams jogando em nosso servidor, nos canais adequados.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">IV - Uso dos canais</h2>
                    <p>
                        <b className="text-(--gray-300)">IV.I</b> - Cada canal possui um propósito específico. Os canais de texto têm descrições que esclarecem suas finalidades, enquanto os canais de voz são autoexplicativos. É proibido utilizar os canais de texto e voz de forma inadequada ou para fins que não correspondam ao tema para o qual foram designados.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">IV.II</b> - Utilize as salas de voz com moderação. Evite conversas aleatórias enquanto outros membros estão conversando, minimize a exposição de áudio desnecessário e ruídos. Acima de tudo, respeite os outros participantes.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">Sanções e restrição de acesso</h2>
                    <p>
                        A equipe reserva-se o direito de restringir as ações de um usuário, limitando suas interações no servidor, suspendendo-o temporariamente ou banindo-o permanentemente, ou aplicando outras sanções, caso este infrinja qualquer uma das regras abaixo estabelecidas:
                    </p>
                    <p>
                        Respeitar nossas diretrizes e regras ao usar os canais de voz e texto da comunidade (Ex: Chat; Screenshots; Buscando Clã) em nosso Discord é fundamental. Em caso de descumprimento das regras, você terá 3 chances.
                    </p>
                    <Timeline steps={steps} />
                    <Callout content={<span>
                        <b className="text-(--red-500) inline-block">Atenção:</b> Ao ser restrito permanentemente e/ou por tempo indefinido o seu acesso ao servidor também será revogado.
                    </span>} type="error" />
                </section>
            </main >
            <Footer />
        </>
    )
}