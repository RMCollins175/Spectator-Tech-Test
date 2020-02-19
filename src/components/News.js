import React, { Component } from 'react'
import NewsList from './NewsList.js'

import Axios from "axios";

export default class News extends Component {
    constructor(props) {
        super(props)

        this.state = {
            results: []
        }
    }

    async componentDidMount() {
        let response = await Axios.get("http://newsapi.org/v2/top-headlines?country=gb&apiKey=55f245758a054a6381d493b655144574")
        console.log(response.data.articles)
        this.setState({results: response.data.articles})
    }

    render() {
        const { results } = this.state

        return (
           <NewsList 
                newsStories={results || []}
           />
        )
    }
}
