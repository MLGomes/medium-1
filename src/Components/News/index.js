import { User, InfoNews, Imagem, New, Artigo, UsuarioPost, Text, Tag, DescriptionNew, TextPrincipal, DivImagem } from './style';
import { MdOutlineBookmarkAdd } from 'react-icons/md';

export function News() {

    return (
        <>
        <User>
            <Artigo>
            <DivImagem>
            <Imagem src='https://app.lit.com.br:8443/api/downdImg/12' />
            <UsuarioPost>Marcos Sanchez</UsuarioPost>
            <New src='https://api.lit.com.br/api/media/file/download/62547be8a35e01a3694b2a1c.png'/>
            
            </DivImagem>
            
            <InfoNews> 

                
                <TextPrincipal>Descrição desse item aqui ó</TextPrincipal>

            </InfoNews>
            <DescriptionNew>
            <Text>Apr 16</Text>
            <Text>Tempo de Leitura 10min</Text>
            <Tag>Ação</Tag>
            <MdOutlineBookmarkAdd />
            </DescriptionNew>

            </Artigo>
            
            
        </User>

        

        </>
    )
}