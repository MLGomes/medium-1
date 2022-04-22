import { Corpo, Toposite, Imagem, Botaoheader, Botao, ReferenciaPara, ReferenciaParaStart } from './style';

export function Header() {

    return (
        <Corpo>
            
            <Toposite>
                <Imagem src='https://lever-client-logos.s3.us-west-2.amazonaws.com/762fd4bd-7d50-4ac3-80d3-bad44702bf87-1604363975963.png'/>

                    <Botaoheader>
                        
                        <nav>
                        
                        <Botao>
                            <button><ReferenciaPara href="#">Our story</ReferenciaPara></button>
                        </Botao>
                        <Botao>
                            <button><ReferenciaPara href="#">Membership</ReferenciaPara></button>
                        </Botao>
                        <Botao>
                            <button><ReferenciaPara href="#">Write</ReferenciaPara></button>
                        </Botao>
                        <Botao>
                            <button><ReferenciaPara href="#">Sing In</ReferenciaPara></button>
                        </Botao>
                        <Botao>
                            <button><ReferenciaParaStart href="#">Get started</ReferenciaParaStart></button>
                        </Botao>
                        
                        </nav>
                    </Botaoheader>

            </Toposite>

        </Corpo>
    )
}