import Footer from "@/layout/Footer";
import { Link } from "react-router-dom";

import LinkComponent from "@/components/LinkComponent";
import isotipoVector from '@assets/images/vectors/isotipo.svg';

export default function Terms() {
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
                    <h1 className="text-2xl md:text-4xl text-(--orange-500)">Termos de Serviço</h1>
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
                        Estes Termos regem seu acesso e uso dos serviços, conforme definidos aqui, e qualquer conteúdo associado, atualizações e recursos. Estes Termos são um acordo legalmente vinculativo entre Você e a ZIRAFLIX. Leia atentamente antes de utilizar os serviços.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">Quem somos</h2>
                    <p>
                        Nós desenvolvemos, operamos e mantemos servidores independentes de Grand Theft Auto V, proporcionando uma experiência modificada do jogo no modo online. Nossos serviços também podem incluir acesso a determinados softwares, recursos e conteúdo, incluindo itens que você pode comprar de nós ou de outros.
                        A ZIRAFLIX, detentora do OMEX está localizada em Praça Alberto Lion, Nº 270, Mooca, São Paulo-SP, Brasil. 01515-000.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">Definições</h2>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        Quando dizemos "OMEX", "ZIRAFLIX", "Empresa", "nós", "nos" e "nosso" nestes termos, queremos dizer ZIRAFLIX, suas subsidiárias e suas empresas relacionadas.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        Quando dizemos "Serviços" nestes termos, queremos dizer serviços, servidores, sites e outros produtos da ZIRAFLX.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        Quando dizemos "Você", "Usuário" ou "Seu", queremos dizer qualquer usuário dos Serviços, ou qualquer proprietário, executivo, funcionário, afiliado ou agente dos mesmos que use os Serviços ou qualquer parte deles.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        Quando dizemos "Termos" nos referimos à estes termos de serviço e contrato de licença de usuário final e quaisquer termos, condições, acordos, representações, garantias, obrigações e licenças aqui contidos.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        Quando dizemos "Diretrizes do OMEX", queremos dizer as <LinkComponent text="Regras do Servidor" type="internal" to="/server-rules" target="_blank" /> e <LinkComponent text="Regras do Discord" type="internal" to="/discord-rules" target="_blank" />.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        Quando dizemos "Servidor" nestes termos, queremos dizer qualquer servidor de modificação multijogador e/ou RPG para Grand Theft Auto V que é desenvolvido, operado e mantido pela nossa Empresa.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        Quando dizemos "Conteúdo gerado pelo usuário" ou "UGC" nestes termos, queremos dizer quaisquer ativos alfandegários, juntamente com fotos, imagens, semelhanças, logotipos, marcas, obras literárias, gravações sonoras, composições musicais, obras e programas audiovisuais, modos, animações, nomes e qualquer outro conteúdo ou material publicado ou de outra forma integrado aos Serviços por meio do Usuário.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        Quando dizemos "Conteúdo Protegido" nestes termos, queremos dizer todo o conteúdo, incluído como parte dos Serviços e qualquer compilação deles, incluindo, sem limitação, Conteúdo Gerado pelo Usuário, a aparência dos Serviços, o texto, gráficos, código-fonte, gravações de som, composição musical, narrativa, personagens, imagens, obras literárias e quaisquer outras obras de autoria ou outros materiais contidos neles, sejam ou não protegiveis por direitos autorais, marca registrada ou outra lei ou teoria jurídica aplicável. Para os propósitos destes Termos, "Conteúdo Protegido" também inclui Grand Theft Auto V, Grand Theft Auto V online e todos os materiais subjacentes neles.
                    </p>
                    <p>
                        Também temos uma <LinkComponent text="Política de Privacidade" type="internal" to="/privacy" target="_blank" />, <LinkComponent text="Regras do Servidor" type="internal" to="/server-rules" target="_blank" />, <LinkComponent text="Regras do Discord" type="internal" to="/discord-rules" target="_blank" /> e essas outras políticas que se aplicam ao seu uso de nossos serviços e são incorporadas a estes termos. Você deve ler essas políticas — trabalhamos duro para torná-las simples e claras, e elas contêm informações importantes sobre o seu uso de nossos serviços.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">I. Isenção de responsabilidade</h2>
                    <p>
                        <b className="text-(--gray-300)">I.I</b> - A ZIRAFLIX e/ou o OMEX não são afiliados ou endossados pelo FiveM, Cfx/re, Rockstar North, Take-Two Interactive ou outros detentores de direitos autorais. Quaisquer marcas comerciais utilizadas pertencem aos seus respectivos proprietários.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">I.II</b> - A ZIRAFLIX e/ou o OMEX não se responsabilizam pela disponibilidade do serviço e/ou funcionamento da plataforma <LinkComponent text="FiveM" type="external" to="https://fivem.net/" /> tal como quaisquer serviços de terceiros necessários para utilização dos serviços prestados.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">II. Provedora de serviços</h2>
                    <p>
                        <b className="text-(--gray-300)">II.I</b> - Os serviços do OMEX que você pode contratar são fornecidos por:
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-4 text-(--gray-200)">
                        <b>ZIRAFLIX DESENVOLVIMENTO DE SOFTWARE LTDA</b><br />
                        CNPJ: 47.733.534/0001-90<br />
                        Praça Alberto Lion, Nº 270, Mooca, São Paulo-SP, Brasil. 01515-000.<br />
                        <LinkComponent text="contato@ziraflix.gg" type="external" to="mailto:contato@ziraflix.gg" />
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">III. Licença</h2>
                    <p>
                        <b className="text-(--gray-300)">III.I</b> - Os Serviços são licenciados para você para seu uso pessoal e entretenimento. O OMEX concede a você uma Licença pessoal, limitada, intransferível, totalmente revogável e não exclusiva para usar os Serviços para seus fins não comerciais e de entretenimento, sujeito à sua conformidade com estes Termos. Qualquer uso dos Serviços é expressamente condicionado à sua conformidade com estes Termos. Você não pode acessar, copiar, modificar ou distribuir os Serviços, a menos que expressamente autorizado pela Empresa ou permitido pela lei aplicável. Você não pode fazer engenharia reversa ou tentar extrair ou usar de outra forma o código-fonte ou outros dados dos Serviços, a menos que expressamente autorizado pela Empresa ou permitido por lei. A Empresa ou seus licenciadores possuem e reservam todos os outros direitos, incluindo todos os direitos, títulos e interesses nos Serviços e todos os materiais ou conteúdo neles contidos. Todos os outros direitos, incluindo todos os Direitos de Propriedade Intelectual com relação ao Conteúdo Protegido são reservados por seus respectivos proprietários.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">IV. Restrições de licença e conduta proibida</h2>
                    <p>
                        <b className="text-(--gray-300)">IV.I</b> - Você recebe uma licença não exclusiva, intransferível e revogável para acessar e usar os Serviços, estritamente de acordo com estes Termos. Como condição para o seu uso dos Serviços, você declara e garante à Empresa que não usará os Serviços para qualquer propósito que seja ilegal ou proibido por estes Termos. Além disso, você não pode fazer nada do seguinte com relação aos Serviços ou quaisquer componentes deles:
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">I</b> - Usar os Serviços de qualquer maneira que viole estes Termos ou as Diretrizes do OMEX.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">II</b> - Usar os Serviços comercialmente ou para fins promocionais, exceto conforme autorizado de outra forma aqui.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">III</b> - Usar quaisquer programas de terceiros não autorizados para afetar os Servidores e/ou Grand Theft Auto V, incluindo, mas não se limitando a, programas de trapaça, scripts, treinadores, bots ou qualquer outro programa que possa interromper, interferir ou coletar informações sobre os Serviços ou o Conteúdo Protegido.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">IV</b> - Copiar, reproduzir, distribuir, exibir, executar publicamente, publicar ou usar os Serviços ou qualquer parte ou aspecto deles, de qualquer forma que não esteja expressamente autorizada nestes Termos.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">V</b> - Fazer engenharia reversa, descompilar, desmontar ou tentar descobrir o código-fonte dos Serviços, o Conteúdo Protegido ou qualquer parte deles, exceto e somente na medida em que essa atividade seja expressamente permitida pela lei aplicável do seu país de residência.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">VI</b> - Modificar, adaptar, traduzir ou criar trabalhos derivados com base nos Serviços ou qualquer parte deles, exceto e somente na medida em que tal atividade seja expressamente permitida por estes Termos ou pela lei aplicável, não obstante esta limitação.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">VII</b> - Remover, contornar, desabilitar, danificar ou interferir de outra forma nos recursos relacionados à segurança dos Serviços.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">VIII</b> - Acessar os Serviços ou qualquer site, servidor, aplicativo de software ou outro recurso de computador de propriedade, usado e/ou licenciado pela Empresa, por meio de qualquer robô, spider, scraper, crawler ou outros meios automatizados para qualquer finalidade, ou ignorar quaisquer medidas que a Empresa possa usar para impedir ou restringir o acesso a qualquer site, servidor, aplicativo de software ou outro recurso de computador de propriedade, usado e/ou licenciado para a Empresa.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">IX</b> - Interferir ou interromper os Serviços ou servidores ou redes conectadas aos Serviços, ou desobedecer quaisquer requisitos, procedimentos, políticas ou regulamentos de redes conectadas aos Serviços; Coletar ou coletar endereços de e-mail ou outras informações de contato de outros Usuários.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">X</b> - Usar os Serviços para qualquer finalidade ilegal ou em violação de qualquer lei ou regulamento local, estadual, nacional ou internacional, incluindo, sem limitação, leis que regem a propriedade intelectual e outros direitos de propriedade, proteção de dados e privacidade.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">XI</b> - Usar os Serviços de qualquer maneira que possa danificar, desabilitar, sobrecarregar ou prejudicar os Servidores, o Site ou os servidores do Site, ou de outra forma interferir no uso e aproveitamento dos Serviços ou do Grand Theft Auto V por terceiros.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">XII</b> - Obter ou tentar obter quaisquer materiais ou informações por quaisquer meios não intencionalmente disponibilizados ou fornecidos pelos Serviços.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">XIII</b> - Personificar qualquer pessoa ou entidade, alegar falsamente uma afiliação com qualquer pessoa ou entidade, falsificar a assinatura digital de outra pessoa, deturpar a fonte, identidade ou conteúdo de informações transmitidas por meio dos Serviços ou realizar qualquer outra atividade fraudulenta semelhante.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">XIV</b> - Difamar, assediar, abusar, ameaçar ou fraudar Usuários, ou coletar, ou tentar coletar, informações pessoais sobre Usuários ou terceiros sem seu consentimento.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">IV.II</b> - Você reconhece e concorda que se você se envolver em qualquer um dos comportamentos acima, a Empresa pode tomar medidas contra os seus acessos aos nossos Serviços, incluindo, mas não se limitando a, suspender ou remover permanentemente seu acesso aos Servidores a qualquer momento e a critério exclusivo da Empresa. Qualquer ação desse tipo é sem renúncia ou prejuízo a quaisquer direitos ou recursos que a Empresa tenha aqui ou na lei aplicável.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">V. Conta</h2>
                    <p>
                        <b className="text-(--gray-300)">V.I</b> - Para usar os Serviços, você deve possuir uma conta no Discord e Steam. Todas as Contas estão sujeitas a estes Termos. Você é o único responsável por manter a confidencialidade e a segurança de sua conta. Tal segurança inclui, mas não se limita a, restringir o acesso ao seu computador, laptop, tablet ou dispositivo móvel que você usa para acessar os Serviços e/ou onde tal senha pode ser armazenada. Você concorda que é o único responsável por todas as atividades e ações que ocorrem sob os auspícios de sua conta. Você concorda em não atribuir ou transferir sua conta ou compartilhar sua senha com qualquer outra pessoa ou entidade. Você reconhece e concorda que a Empresa não é responsável pelo acesso de terceiros à sua conta que resulte de roubo ou apropriação indevida de sua senha ou outras credenciais da conta. Você reconhece e concorda que qualquer ação tomada sob sua conta será presumida como tendo sido autorizada por você.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">V.II</b> - Precisamos do seu Steam ID para conectá-lo ao servidor FiveM. Ao usar o Steam e obter um Steam ID, você pode estar sujeito a acordos com o Steam. Para sua referência, os termos e condições do Steam estão disponíveis <LinkComponent text="aqui" type="external" to="https://store.steampowered.com/eula/471710_eula_0" /> . Você também reconhece e concorda que para jogar Grand Theft Auto V em qualquer servidor RPG ou multijogador, incluindo os Servidores, você precisará criar um Rockstar ID e obter uma cópia válida e licenciada do Grand Theft Auto V. Ao usar o Grand Theft Auto V e/ou configurar um Rockstar ID, você pode estar sujeito a um ou mais acordos com a Rockstar. Para sua referência, os termos e condições da Rockstar estão disponíveis <LinkComponent text="aqui" type="external" to="https://www.rockstargames.com/legal" /> e o Contrato de Licença de Usuário Final do Grand Theft Auto V está disponível <LinkComponent text="aqui" type="external" to="https://www.rockstargames.com/legal" />.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">V.III</b> - Você reconhece e concorda que a Empresa não é parte de nenhum dos acordos anteriores ou de quaisquer outros acordos entre você e o Steam, Discord ou a Rockstar e que a conformidade com tais acordos não é monitorada, aplicada ou controlada pela Empresa. Se a Empresa receber notificação de que sua atividade viola qualquer um dos acordos anteriores ou qualquer acordo semelhante entre você e o Steam ou a Rockstar, ou qualquer outro terceiro, a Empresa pode, a nosso exclusivo critério, tomar medidas contra sua conta para colocá-lo em conformidade com tais acordos. Tais ações podem incluir o cancelamento de uma transação e a suspensão ou rescisão de seus benefícios e/ou removê-lo dos Servidores.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">V.IV</b> - Você também reconhece e concorda que, ao se conectar ao servidor FiveM por meio de sua ID Steam e criar uma Conta por meio de sua ID Rockstar, você está fornecendo à Empresa acesso limitado a qualquer informação, incluindo quaisquer informações pessoais sobre você contidas em sua ID Steam e Rockstar, respectivamente, e credenciais associadas, com a finalidade de criar e interagir com sua conta.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">VI. Conteúdo gerado pelo usuário</h2>
                    <p>
                        <b className="text-(--gray-300)">VI.I</b> - Você declara aqui que qualquer Conteúdo Gerado pelo Usuário que você criar é totalmente original e que você possui todos os direitos, títulos e interesses sobre tal Conteúdo Gerado pelo Usuário ou de outra forma tem o direito legal e autoridade para integrar tal Conteúdo Gerado pelo Usuário aos Serviços e conceder a licença à Empresa conforme descrito aqui. Você garante ainda que o uso ou exploração autorizados do Conteúdo Gerado pelo Usuário não violarão quaisquer direitos de terceiros, incluindo, sem limitação, quaisquer direitos autorais, marcas registradas ou outros direitos de propriedade intelectual, direitos de privacidade ou direitos estatutários ou de direito comum de publicidade em qualquer jurisdição.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">VI.II</b> - A Empresa reserva-se o direito de remover qualquer Conteúdo Gerado pelo Usuário que não esteja em conformidade com estes Termos ou qualquer acordo ou diretrizes promulgadas pela Rockstar. A Empresa também pode remover Conteúdo Gerado pelo Usuário que viole os direitos de outra pessoa, incluindo, sem limitação, quaisquer marcas registradas, direitos autorais, direitos de patente ou similares, bem como direitos estatutários e de direito comum de publicidade. Finalmente, a Empresa pode remover o seguinte:
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">I</b> - Conteúdo gerado pelo usuário que assedia, difama ou menospreza qualquer indivíduo, incluindo comentários assediantes ou pejorativos com base no sexo, orientação sexual, preferência sexual, status transgênero, identidade de gênero, raça, etnia, religião ou outra classe protegida de qualquer indivíduo.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">II</b> - Conteúdo gerado pelo usuário que pode ser considerado enganoso, fraudulento ou de outra forma ilegal ou que é carregado para uma finalidade ilegal ou não autorizada.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">VI.III</b> - Você reconhece e concorda que uma violação desta seção constituirá uma violação material destes Termos e se a Empresa descobrir que você violou a seção, ela poderá, a seu exclusivo critério, revogar seu acesso a qualquer Servidor, incluindo qualquer benefício, sem aviso ou reembolso.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">VII. Propriedade Intelectual</h2>
                    <p>
                        <b className="text-(--gray-300)">VII.I</b> - Todo o Conteúdo Protegido é propriedade da Empresa, Rockstar ou seus respectivos fornecedores/licenciadores terceirizados e protegido por direitos autorais, marcas registradas e outras leis que protegem a propriedade intelectual e direitos de propriedade. Você concorda em observar e obedecer a todos os direitos autorais, marcas registradas e outros avisos de propriedade, legendas ou outras restrições contidas em qualquer conteúdo desse tipo e não fará nenhuma alteração neles.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">VII.II</b> - Você não modificará, publicará, transmitirá, fará engenharia reversa, participará da transferência ou venda, criará trabalhos derivados ou explorará de qualquer forma qualquer Conteúdo Protegido, no todo ou em parte, encontrado nos Serviços. Seu uso dos Serviços não lhe dá o direito de fazer qualquer uso não autorizado de qualquer Conteúdo Protegido e, em particular, você não excluirá ou alterará quaisquer direitos de propriedade ou avisos de atribuição em qualquer Conteúdo Protegido. Você usará o Conteúdo Protegido somente para seu uso pessoal, conforme descrito nestes Termos, e não fará nenhum outro uso do Conteúdo Protegido sem a permissão expressa por escrito da Empresa e/ou do proprietário terceirizado do Conteúdo Protegido, se aplicável. Você reconhece e concorda que não adquire nenhum direito de propriedade em qualquer Conteúdo Protegido. Exceto conforme disposto aqui, estes Termos não concedem nenhuma licença, expressa ou implícita, ao Conteúdo Protegido ou qualquer outra propriedade intelectual da Empresa, nossos licenciadores ou qualquer terceiro.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">VIII. Monitoramento e Anti-Cheat</h2>
                    <p>
                        <b className="text-(--gray-300)">VIII.I</b> - Nosso objetivo é fornecer um ambiente de jogo e RPG divertido e positivo para nossos Usuários. Para dar suporte a esse objetivo, temos o direito, mas não a obrigação, de monitorar os Serviços de Comunicação e a jogabilidade do Usuário em um Servidor para, entre outras coisas, abordar trapaças e comportamentos semelhantes. Você reconhece e concorda que, para interagir com os Servidores, você pode ser obrigado a instalar um software anti-cheat, que será executado em segundo plano no seu dispositivo. Este software anti-cheat monitorará apenas suas atividades nos Servidores e não terá acesso a nenhuma outra informação no seu dispositivo. ASSIM, VOCÊ RECONHECE E CONCORDA QUE SEU USO DOS SERVIDORES, INCLUINDO TODA A JOGABILIDADE ASSOCIADA, OU SEU USO DOS SERVIÇOS DE COMUNICAÇÃO NÃO É PRIVADO E PODE SER MONITORADO A QUALQUER MOMENTO PELA EMPRESA A NOSSO EXCLUSIVO CRITÉRIO. OBSERVE QUE TODAS AS INFORMAÇÕES PESSOAIS QUE COLETAMOS POR MEIO DO SOFTWARE ANTI-FRAUDE SERÃO APENAS PARA O FIM DE EVITAR TRAPAÇAS E COMPORTAMENTOS SEMELHANTES E SERÃO USADAS DE ACORDO COM OS TERMOS ESTABELECIDOS EM NOSSA <LinkComponent text="POLÍTICA DE PRIVACIDADE" type="internal" to="/privacy" target="_blank" />.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">IX. Representações e Garantias</h2>
                    <p>
                        <b className="text-(--gray-300)">IX.I</b> - Além de quaisquer outras representações e garantias feitas aqui, você declara e garante que:
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">I</b> - NNão está proibido de receber ou usar qualquer aspecto dos Serviços sob as leis aplicáveis.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">II</b> - A Empresa não desabilitou anteriormente seu acesso aos Serviços por uma violação da lei ou destes Termos ou outros acordos, termos de uso ou contratos aplicáveis.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">X. Links para sites de terceiros</h2>
                    <p>
                        <b className="text-(--gray-300)">X.I</b> - Os Serviços podem conter links para sites de terceiros. Os sites de terceiros não estão sob o controle da Empresa e a Empresa não é responsável pelo conteúdo dos mesmos, incluindo, sem limitação, qualquer link contido neles. A Empresa está fornecendo esses links a você apenas como uma conveniência, e a inclusão de qualquer link não implica endosso pela Empresa do site ou qualquer associação com seus operadores.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">XI. Dispositivos e conexão com a internet</h2>
                    <p>
                        <b className="text-(--gray-300)">XI.I</b> - O uso e o acesso aos Serviços podem exigir o uso do seu computador pessoal, laptop, tablet ou dispositivo móvel, bem como a comunicação com ou o uso de espaço em tal dispositivo. Você é o único responsável por toda conexão de dados de internet e/ou móveis e todas as taxas associadas que você incorrer ao acessar os Serviços.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">XII. Indenização</h2>
                    <p>
                        <b className="text-(--gray-300)">XII.I</b> - Na extensão máxima permitida pela lei aplicável, você concorda em indenizar, defender e isentar de responsabilidade a Empresa, seus executivos, diretores, funcionários, agentes e cessionários de e contra todas e quaisquer reivindicações, perdas, custos, dívidas, responsabilidades e despesas (incluindo, mas não se limitando a honorários advocatícios) decorrentes de:
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">I</b> -  Seu uso indevido e acesso aos Serviços.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">II</b> - Sua violação de qualquer obrigação, representação ou garantia estabelecida nestes Termos.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">III</b> - Sua violação de qualquer direito de terceiros, incluindo, sem limitação, quaisquer direitos autorais, propriedade intelectual ou direito de privacidade.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">IV</b> - Seu uso ou incapacidade de usar os Serviços.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">V</b> - Qualquer reivindicação de que você causou danos a terceiros.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">VI</b> - Uso autorizado do seu UGC pela Empresa.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">XIII. Renúncia de ação coletiva</h2>
                    <p>
                        <b className="text-(--gray-300)">XIII.I</b> - Qualquer arbitragem sob estes Termos ocorrerá em uma base individual; arbitragens de classe e ações de classe/representativas/coletivas não são permitidas. AS PARTES CONCORDAM QUE UMA PARTE PODE APRESENTAR REIVINDICAÇÕES CONTRA A OUTRA SOMENTE NA CAPACIDADE INDIVIDUAL DE CADA PARTE, E NÃO COMO UM AUTOR OU MEMBRO DE CLASSE EM QUALQUER PROCESSO DE CLASSE, COLETIVO E/OU REPRESENTATIVO PUTATIVO, COMO NA FORMA DE UMA AÇÃO DE PROCURADOR-GERAL PRIVADO CONTRA A OUTRA. Além disso, a menos que você e a Empresa concordem de outra forma, o árbitro não pode consolidar as reivindicações de mais de uma pessoa e não pode presidir qualquer forma de um processo de representação ou classe.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">XIV. Política de Transações e Reembolsos</h2>
                    <p>
                        <b className="text-(--gray-300)">XVI.I</b> - Os serviços e produtos virtuais oferecidos pela ZIRAFLIX, incluindo mas não se limitando a Skins, Itens cosméticos, Vantagens Temporárias e quaisquer outros consumíveis digitais (coletivamente, "Itens Virtuais"), são considerados conteúdos digitais não sujeitos à retração ou fornecimento em mídia física. EM CONFORMIDADE COM O ARTIGO 49, §4º DO CÓDIGO DE DEFESA DO CONSUMIDOR, O USUÁRIO DECLARA CIÊNCIA E CONCORDA EXPRESSAMENTE COM A DISPENSA DO DIREITO DE ARREPENDIMENTO PARA AQUISIÇÃO DESTES ITENS VIRTUAIS, uma vez que sua execução e entrega iniciam-se imediatamente após a confirmação do pagamento.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">XVI.II</b> - A ZIRAFLIX, a seu exclusivo critério, poderá autorizar reembolsos ou a reversão de uma transação APENAS nas seguintes situações excepcionais:
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">I</b> - Erro de Cobrança: Cobrança duplicada ou valor cobrado incorretamente.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">II</b> - Defeito Técnico Irrecuperável: O Item Virtual adquirido não foi entregue na conta do usuário devido a um erro técnico comprovado e irrecuperável de nossa parte, após investigação.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">III</b> - Compra Não Autorizada: Transação fraudulenta comprovada na sua conta, devidamente reportada e investigada.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">XVI.III</b> - O usuário NÃO terá direito a reembolso nas seguintes situações:
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">I</b>. Arrependimento: Não gostou do item, comprou o item errado ou mudou de ideia.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">II</b> - Banimento: Perda de acesso aos Itens Virtuais devido a violação destes Termos de Serviço, das Regras do Servidor ou quaisquer diretrizes do OMEX que resultem em restrição ou banimento da conta. TODO E QUALQUER VALOR INVESTIDO PERDE-SE EM CASO DE SANÇÃO ADMINISTRATIVA.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">III</b> - Alterações no Item: Alterações no visual, estatísticas, mecânica ou disponibilidade de qualquer Item Virtual.
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">IV</b> - Problemas de Conexão ou Performance: Problemas técnicos relacionados à sua conexão com a internet, hardware ou software de terceiros (FiveM, Rockstar Games Social Club, Steam).
                    </p>
                    <p className="border-l-2 border-(--orange-500) pl-2 md:pl-4">
                        <b className="text-(--gray-300)">V</b> - Fechamento da Conta: Solicitação voluntária de fechamento de conta pelo usuário.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">XVI.IV</b> - Os Créditos OMEX não têm valor monetário real, não são conversíveis em dinheiro, não são transferíveis e não constituem uma propriedade pessoal do usuário. Eles são uma medida de valor para transações dentro dos serviços.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">XVI.V</b> - Todas as solicitações de reembolso devem ser formalizadas em até 07 (sete) dias corridos a partir da data da transação, através do canal exclusivo de suporte (<LinkComponent text="suporte@omex.gg" type="external" to="mailto:suporte@omex.gg" />), fornecendo todas as informações necessárias para a identificação e análise do caso (identificação da conta, data e valor exato da transação, motivo detalhado do pedido). A ZIRAFLIX terá um prazo de até 30 (trinta) dias para analisar e responder à solicitação.
                    </p>
                    <p>
                        <b className="text-(--gray-300)">XVI.VI</b> - A aprovação ou negação de qualquer pedido de reembolso é de única e exclusiva discricionariedade da ZIRAFLIX. Todas as decisões são finais.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">XV. Rescisão e Restrição de Acesso</h2>
                    <p>
                        <b className="text-(--gray-300)">XV.I</b> - A Empresa reserva-se o direito de rescindir seu acesso aos Serviços, ou qualquer parte deles a qualquer momento, sem Aviso, por qualquer motivo, incluindo, sem limitação, uma violação destes Termos ou uma violação das Diretrizes do OMEX. O uso dos Serviços não é autorizado em nenhuma jurisdição que não dê efeito a todas as disposições destes Termos, incluindo, sem limitação, esta seção.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold border-b-2 border-(--gray-600) pb-4">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">XVI. Atualizações nestes Termos</h2>
                    <p>
                        <b className="text-(--gray-300)">XVI.I</b> - Atualizaremos estes Termos de tempos em tempos. Sempre indicamos a data em que as últimas alterações foram publicadas e, se as alterações forem significativas, forneceremos um aviso mais proeminente, conforme exigido por lei, como enviando um e-mail para você ou destacando as alterações dentro dos Serviços.
                    </p>
                </section>

                <section className="flex flex-col gap-4 text-xs md:text-sm font-semibold">
                    <h2 className="text-lg md:text-2xl text-(--gray-50)">Contate-nos</h2>
                    <p>
                        Envie um e-mail para <LinkComponent text="compliance@omex.gg" type="external" to="mailto:compliance@omex.gg" /> com quaisquer perguntas sobre estes Termos. Teremos o prazer em ajudar.
                    </p>
                </section>
            </main >
            <Footer />
        </>
    )
}