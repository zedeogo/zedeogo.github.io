import React from "react";
import { BemVindo, SpaceTab, NewArticle, ContentArticle } from './styles'

export default function Index() {
    return (
        <BemVindo>
            <h2>Seja Bem Vindo(a) ao Portfólio de José Diogo Caetano Diniz (zedeogo)</h2> 
            <hr />
            <NewArticle>
                <h3>Quem sou eu?</h3>
                <ContentArticle>
                    <SpaceTab />Sou um estudante de Tecnologia da
                    Informação em Colégio Técnico com nível intermediário em Inglês,
                    também sou um jovem apaixonado pelo mundo dos
                    códigos e um eterno estudante, gosto de
                    aprender e saber um pouco de tudo, aquela
                    curiosidade de saber como tudo funciona,
                    tento compartilhar o máximo de conhecimentos
                    adquiridos e ajudar todos aqueles que sou capaz.
                </ContentArticle>
                <ContentArticle>
                    <SpaceTab />Antes dos estudos, tenho contato
                    com a área de Tecnologia da Informação desde
                    meus 11 anos de idade, que também foi a idade
                    que eu recebi meu primeiro notebook, inclusive,
                    possuo o mesmo até hoje, guardado em um lugar
                    especial com cuidados frequentes para manter
                    seu estado. Minha curiosidade pela área é imensa,
                    estou em constante aprendizado, sempre procuro
                    novas informações e desafios para enfrentar,
                    visando me tornar cada vez mais qualificado.
                </ContentArticle>
                <ContentArticle>
                    <SpaceTab />Tenho uma paixão imensurável por
                    estudar, passo horas estudando todos os dias,
                    aprendendo coisas novas e diferentes. Essa
                    paixão vem da minha curiosidade, que por mais
                    incrível que pareça, ela não acaba, e me motiva
                    para conquistar tudo aquilo que almejo.
                </ContentArticle>
            </NewArticle>
        </BemVindo>
    )
}