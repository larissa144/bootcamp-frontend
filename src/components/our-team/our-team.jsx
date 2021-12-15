import React from "react";
import styled from 'styled-components'
import Lari from '../../assets/img/lari.png'
import Gabi from '../../assets/img/gabi.png'
import Kleber from '../../assets/img/kleber.png'
import Vini from '../../assets/img/vini.png'
import Luan from '../../assets/img/luan.png'
import Mateus from '../../assets/img/mateus.png'

const AllElements = styled.div`
    margin: 0 30px 8%;
`
const Title = styled.p`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: #440A67;
`
const Allimages = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: auto;
  justify-content: space-between;
  align-items: center;

`
const Images = styled.img`
  width: 75%;
`
const DivImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`

function OurTeam() {
    return(
        <AllElements>
            <div>
                <Title size={'38px'} weight={600}>Nosso time</Title>
            </div>

            <Allimages>
                <DivImg>
                    <Images src= {Gabi} />
                    <Title size={'20px'} weight={600}>Gabielle</Title>
                </DivImg>

                <DivImg>
                    <Images src= {Kleber} />
                    <Title size={'20px'} weight={600}>Kleber</Title>
                </DivImg>

                <DivImg>
                    <Images src= {Lari} />
                    <Title size={'20px'} weight={600}>Larissa</Title>
                </DivImg>

                <DivImg>
                    <Images src= {Luan} />
                    <Title size={'20px'} weight={600}>Luan</Title>
                </DivImg>

                <DivImg>
                    <Images src= {Mateus} />
                    <Title size={'20px'} weight={600}>Mateus</Title>
                </DivImg>

                <DivImg>
                    <Images src= {Vini} />
                    <Title size={'20px'} weight={600}>Vinicius</Title>
                </DivImg>
            </Allimages>

        </AllElements>
    )
}

export default OurTeam;
