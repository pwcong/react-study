
import React from 'react'
import express from 'express'
import path from 'path'
import compression from 'compression'

import {
    renderToString
} from 'react-dom/server'
import {
    match,
    RouterContext
} from 'react-router'
import routes from './modules/routes'

var app = express()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory works
app.get('*', function(req, res) {

	match({ routes: routes, location: req.url }, (err, redirect, props) => {
	    // in here we can make some decisions all at once
	    if (err) {
	      // there was an error somewhere during route matching
	      res.status(500).send(err.message)
	    } else if (redirect) {
	      // we haven't talked about `onEnter` hooks on routes, but before a
	      // route is entered, it can redirect. Here we handle on the server.
	      res.redirect(redirect.pathname + redirect.search)
	    } else if (props) {
	      // if we got props then we matched a route and can render
	      const appHtml = renderToString(<RouterContext {...props}/>)
	      res.send(renderPage(appHtml))
	    } else {
	      // no errors, no redirect, we just didn't match anything
	      res.status(404).send('Not Found')
	    }
	})

})

function renderPage(appHtml){
	return `
		<!DOCTYPE html public="storage">
		<html>
		<meta charset="utf-8"/>
		<title>Server Render</title>	
		<link rel="stylesheet" href="/index.css" />
		<div id="app">${appHtml}</div>
		<script src="/bundle.js"></script>

		`
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
})