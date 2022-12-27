import { Hero, Info } from '../Components'

export default function HeroContainer({ slide_id }) {
    return (
        <Hero>
            <Hero.Container>
                <Hero.Image slide_id={slide_id} />
                <Hero.Shadow />
                <Info>
                    <Info.Container >
                        <Info.Title>{"العنوان"}</Info.Title>
                        <Info.SubTitle>{"شرح صغير"}</Info.SubTitle>
                        <Info.Button slide_id={slide_id}>{"تفاصيل"}</Info.Button>
                    </Info.Container>
                </Info>
            </Hero.Container>
        </Hero>
    )
}
