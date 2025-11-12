import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function RolesTabs() {
    return (
        <div className="w-full border-2 border-(--gray-300)/50">
            <Tabs defaultValue="admin" className="w-full">
                <TabsList className="w-full flex justify-start bg-(--gray-500) font-(family-name:--primary-font)">
                    <TabsTrigger
                        value="admin"
                        className="data-[state=active]:bg-(--gray-700) data-[state=active]:text-(--gray-50)"
                    >
                        Administrador(a)
                    </TabsTrigger>
                    <TabsTrigger
                        value="mod"
                        className="data-[state=active]:bg-(--gray-700) data-[state=active]:text-(--gray-50)"
                    >
                        Moderador(a)
                    </TabsTrigger>
                    <TabsTrigger
                        value="support"
                        className="data-[state=active]:bg-(--gray-700) data-[state=active]:text-(--gray-50)"
                    >
                        Suporte
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="admin" className="bg-(--gray-700) p-4 text-sm leading-relaxed">
                    <span className="text-purple-400 font-(family-name:--primary-font)">Administradores </span>
                    são responsáveis por gerenciar as operações gerais do servidor, garantindo que todas as regras sejam cumpridas,
                    lidando com problemas técnicos e administrativos, e supervisionando os demais membros da equipe para assegurar
                    o bom funcionamento do ambiente.
                </TabsContent>

                <TabsContent value="mod" className="bg-(--gray-700) p-4 text-sm leading-relaxed">
                    <span className="text-orange-400 font-(family-name:--primary-font)">Moderadores </span>
                    são responsáveis por monitorar o comportamento dos jogadores no servidor, aplicando as regras de conduta,
                    mediando discussões e resolvendo conflitos, além de garantir que o ambiente seja saudável e respeitoso para todos.
                </TabsContent>

                <TabsContent value="support" className="bg-(--gray-700) p-4 text-sm leading-relaxed">
                    <span className="text-green-400 font-(family-name:--primary-font)">Suportes </span>
                    são responsáveis por fornecer assistência direta aos jogadores, resolvendo dúvidas e problemas técnicos,
                    garantindo uma experiência de usuário positiva, e encaminhando questões mais complexas para os responsáveis adequados.
                </TabsContent>
            </Tabs>
        </div>
    )
}
