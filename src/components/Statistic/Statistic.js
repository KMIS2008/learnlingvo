import {ContainerFlex, List, Number, TextStatistic} from "./Statistic.styled";

export const Statistic=()=>{
    return (
         <ContainerFlex>
            <List>
                <Number>32,000 +</Number>
                <TextStatistic>Experienced tutors</TextStatistic>
            </List>
            <List>
                <Number>300,000 +</Number>
                <TextStatistic>5-star tutor reviews</TextStatistic>
            </List>
            <List>
                <Number>120 +</Number>
                <TextStatistic>Subjects taught</TextStatistic>
            </List>
            <List>
                <Number>200 +</Number>
                <TextStatistic>Tutor nationalities</TextStatistic>
            </List>
         </ContainerFlex>
    )
}