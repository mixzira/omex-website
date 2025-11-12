import Footer from "@/layout/Footer";
import { Link } from "react-router-dom";

import LinkComponent from "@/components/LinkComponent";
import isotipoVector from '@assets/images/vectors/isotipo.svg';

export default function Privacy() {
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
                    <h1 className="text-2xl md:text-4xl text-(--orange-500)">Políticas de Privacidade</h1>
                </div>
            </header>
            <main className="container mx-auto max-w-(--safe-area) flex flex-col gap-8 text-(--gray-100) pb-8 md:pb-18 px-4 md:px-0">
                <section className="flex flex-col md:flex-row md:items-center gap-2 text-xs md:text-sm text-(--gray-200) font-semibold">
                    <p>Em vigor desde: 08 de Setembro de 2025</p>
                    <span className="hidden md:block text-(--gray-400)">|</span>
                    <p>Última atualização: 08 de Setembro de 2025</p>
                </section>

                <section className="flex flex-col text-xs md:text-sm font-semibold gap-4 border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">Introdução</h2>
                    <p>
                        Esta Política de Privacidade explica como coletamos, usamos, armazenamos, protegemos e compartilhamos suas informações pessoais por meio de nossos serviços.
                    </p>
                    <p>
                        A política de privacidade de dados da ZIRAFLIX estão de acordo coma a lei federal nº 12.965 de 23 de Abril de 2014 (Marco Civil da Internet), com a lei federal nº 13.709 de 14 de Agosto de 2018 (Lei de proteção de dados pessoais) e com o regulamento UE nº 2016/679 de 27 de Abril de 2016 (Regulamento Europeu de Proteção de Dados Pessoais). Está política de privacidade poderá ser atualizada em decorrência de uma eventual atualização normativa, razão pela qual se convida o usuário a consultar periodicamente está sessão.
                    </p>
                    <p>
                        <b>É importante que você leia toda esta política, mas aqui está um resumo para você começar:</b>
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        ✦ <b>Nós nos importamos muito com privacidade.</b> Estamos comprometidos em criar espaços onde as pessoas possam se divertir com seus amigos online. Respeitar a privacidade do usuário é uma parte fundamental dessa missão.<br />
                        ✦ <b>Não vendemos suas informações pessoais.</b> Nosso negócio é baseado em assinaturas e produtos pagos, não na venda de suas informações pessoais a terceiros. <br />
                        ✦ <b>Limitamos quais informações são necessárias.</b> Exigimos as informações que nos permitem analisar dados estatísticos, cumprir obrigações fiscais, fornecer e manter nossos serviços, cumprir nossos compromissos com nossos usuários e satisfazer nossos requisitos legais. O restante é opcional. <br />
                        ✦ <b>Nós damos a você o controle.</b> Nós damos a você a habilidade de controlar sua privacidade.
                    </p>
                </section>

                <section className="flex flex-col text-xs md:text-sm font-semibold gap-4 border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">I. Provedora de serviços</h2>
                    <p>
                        <b className="text-(--gray-300)">I.I</b> - Os serviços do OMEX que você pode contratar são fornecidos por:
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-4 text-(--gray-200)">
                        <b>ZIRAFLIX DESENVOLVIMENTO DE SOFTWARE LTDA</b><br />
                        CNPJ: 47.733.534/0001-90<br />
                        Praça Alberto Lion, Nº 270, Mooca, São Paulo-SP, Brasil. 01515-000.<br />
                        <LinkComponent text="contato@ziraflix.gg" type="external" to="mailto:contato@ziraflix.gg" />
                    </p>
                </section>

                <section className="flex flex-col text-xs md:text-sm font-semibold gap-4 border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">II. Direitos do Usuário</h2>
                    <p>
                        <b className="text-(--gray-300)">II.I</b> - Seus dados pessoais serão processados de forma lícita, leal e transparente.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">II.II</b> - Seus dados pessoais serão coletados apenas para finalidades determinadas, explícitas e legítimas, não podendo ser tratados posteriormente de forma incompatível com essas finalidades.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">II.III</b> - Seus dados pessoais serão coletados de forma adequada, pertinente e limitada às necessidades do objetivo para os quais eles são processados.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">II.IV</b> - Seus dados pessoais serão tratados de forma segura, protegidos do tratamento não autorizado ou ilícito e contra a sua perda, destruição ou danificação acidental, adotando as medidas técnicas ou organizativas adequadas.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">II.V</b> - A qualquer momento o titular poderá solicitar a visualização, atualização ou exclusão os dados informados, via e-mail, uma vez solicitado a remoção dados, o mesmo terá seu acesso a nosso servidor no FiveM e Discord, encerrando assim a nossa prestação de serviço para com o mesmo.
                    </p>
                </section>

                <section className="flex flex-col text-xs md:text-sm font-semibold gap-4 border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">III. Dados coletados</h2>
                    <p>
                        <b className="text-(--gray-300)">III.I</b> - Serão coletados todos os dados pessoais necessários para a prestação de serviços eventualmente contratados ao acessar nossos servidores no FiveM e Discord, sem os quais não será possível a sua execução.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">III.II</b> - Serão coletados: Nome completo; Data de nascimento; Gênero; E-mail; Endereço residencial; IP. Requisitos necessários para acessar os serviços prestados pela ZIRAFLIX.
                    </p>
                </section>

                <section className="flex flex-col text-xs md:text-sm font-semibold gap-4 border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">IV. Retenção dos dados</h2>
                    <p>
                        <b className="text-(--gray-300)">IV.I</b> - Retemos informações pessoais até determinarmos que elas não são mais necessárias para os propósitos de processamento para os quais as coletamos ou retemos ou para conformidade legal.
                    </p>
                </section>

                <section className="flex flex-col text-xs md:text-sm font-semibold gap-4 border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">V. Uso dos seus dados</h2>
                    <p>
                        <b className="text-(--gray-300)">V.I</b> - Seus dados serão usados apenas para fins de identificação, estatísticos e fiscais, podendo também ser usados em medidas judiciais em cumprimento de suas ações relacionadas aos nossos serviços.
                    </p>
                </section>

                <section className="flex flex-col text-xs md:text-sm font-semibold gap-4 border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">VI. Atualizações nesta Política de Privacidade</h2>
                    <p>
                        <b className="text-(--gray-300)">VI.I</b> - Atualizaremos esta Política de Privacidade de tempos em tempos. Sempre indicamos a data em que as últimas alterações foram publicadas e, se as alterações forem significativas, forneceremos um aviso mais proeminente, conforme exigido por lei, como enviando um e-mail para você ou destacando as alterações dentro dos serviços.
                    </p>
                </section>

                <section className="flex flex-col text-xs md:text-sm font-semibold gap-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">Contato</h2>
                    <p>
                        Envie um e-mail para <LinkComponent text="privacy@omex.gg" type="external" to="mailto:privacy@omex.gg" /> com quaisquer perguntas sobre esta Política de Privacidade ou como processamos suas informações. Teremos prazer em ajudar.
                    </p>
                </section>

            </main >
            <Footer />
        </>
    )
}