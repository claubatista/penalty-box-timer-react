import React from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Button from '../../components/Button'
import './Home.css'

const Home = () => (
    <Layout>
        <div className="home__box">
            <Title text="Qual a sua função?" />
            <div className="home__btn">
                <Button to="/penalty-timer" text="Penalty Timer" />
                <Button to="/penalty-box-manager" text="Penalty Box Manager" />
                <Button to="/both" text="Both" />
            </div>
        </div>
    </Layout>
)

export default Home
