import React from "react";
import styled from 'styled-components'
import Mission from '../../assets/img/mission.png'
import Vision from '../../assets/img/vision.png'
import Values from '../../assets/img/values.png'

const AllElements = styled.div`
    padding: 30px 8%;
`
const Title = styled.p`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: #440A67;
`
const Images = styled.img`
  width: 12%;
  margin-right: 20px;
`
const DivImg = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  align-items: center;
`

function AboutUsLanding() {
    return(
        <AllElements>
          <div>
           <Title size={'38px'} weight={600}>Sobre nós</Title>
          </div>

          <DivImg>
              <Images src= {Mission} />
              <div>
              <Title size={'20px'} weight={600}>Missão</Title>
              <Title size={'20px'} weight={100}>
                    Temos como principal objetivo fazer a ponte entre o 
                    doador e as instituições sem fins lucrativos. Facilitando o dia-a-dia das pessoas que não 
                    possuem hábitos de fazer doações, e engajando-as em 
                    causas sociais para ajudar o próximo.
              </Title>
              </div>
          </DivImg>

          <DivImg>
              <Images src= {Vision} />
              <div>
              <Title size={'20px'} weight={600}>Visão</Title>
              <Title size={'20px'} weight={100}>
              Visamos ajudar mais de 500 instituições com doações nos proximos 5 anos. ​
              </Title>
              </div>
          </DivImg>

          <DivImg>
              <Images src= {Values} />
              <div>
              <Title size={'20px'} weight={600}>Valores</Title>
              <Title size={'20px'} weight={100}>
              Nossos principais valores são: <b>empatia</b>, <b>ética</b> e <b>respeito</b>.​
              </Title>
              </div>
          </DivImg>
        </AllElements>
    )
}

export default AboutUsLanding;
