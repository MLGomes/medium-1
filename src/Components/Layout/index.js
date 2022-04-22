import { NewsColumn, SecondColumn, Discovery, Infos, MainGrid } from './style';

import { News } from '../News';

export function Layout() {

    return (
        <>

        <MainGrid>

            <NewsColumn style={{gridArea: "firstColumn"}}>
                <News />
            </NewsColumn>

            <SecondColumn style={{gridArea: "secondColumn"}}>
            <Discovery>
                Discovery
            </Discovery>

            <Infos>
                Infos
            </Infos>
            </SecondColumn>

        </MainGrid>
        </>
        
    )
}