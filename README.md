Setup
    npx create-react-app react-store-reducers
        npm i sass      npm i react-router-dom      npm i firebase
        npm i styled-components
        npm i redux react-redux redux-logger
        npm i reselect  npm i redux-persist
    npm start     

Redux
    Single Point of Truth
    index.js    <Provider store={store}>

Git
    replace master with another branch
        C:\ws\react\react-store-redux>git push -f origin feature/cart-redux:master

Netify
    https://app.netlify.com/signup/start/connect
        CI= npm run build
            https://63dfdceb4e80011311297d9c--sprightly-wisp-bd006f.netlify.app/

    Vercel (for Next projects)
        https://vercel.com/new?onboarding=true

Google fonts
    https://fonts.google.com/       https://fonts.google.com/specimen/Open+Sans?category=Sans+Serif

    generate on google site ->  copy href to public/index.html<head> -> update src/index.css/scss ->  inspect the change

react-router-dom  vs   NextJS nav
    react-router-dom
        App
            <Routes>
                <Route path='/' element={<Nav />} >
                    <Route path='home' element={<Home />} />
                    <Route path='toys' element={<Toys />} />
    
        <Nav>
            <div>
                <Link to='/home'>
                    <div>LOGO</div>

    next
        /pages/_app.js
            <Layout>
                <Component {...pageProps} />
            <MainNav>
                <div>
                    <Link href='/'>LOGO</Link>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>

Firebase
    https://console.firebase.google.com/?pli=1

    create clothing-db project

        Project Overview
            Build
                Authentication
                Firestore Database

.
.
.   >   More tools >    Rendering   > Paint flashing


Conditional within map within map
    {
        Object.keys(categoriesMap).map((title, i) => (
            <>
                <h2>{title}</h2>
                <div className='products'>
                    {
                        categoriesMap[title].map((p, i) => (
                            <li key={i}>
                                {i < 4 && <Product product={p}  />}
                            </li>
                        ))
                    }
                </div>
            </>
        ) )
    }   

<label className={`${ otherProps.value.length ? 'shrink' : '' } form-input-label`} >{label}</label>

Link to ~vs~ navigate
    If there's no other action that needs to happen prior to switching a page - use Link to

Application icon
    place your icon directly under public
    rename it to favicon.ico
    index.html
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />


Resources
    https://zerotomastery.io/
    https://www.youtube.com/@ZeroToMastery/videos
    https://zerotomastery.io/blog/?tag=MustRead&utm_source=mailerlite&utm_medium=email&utm_campaign=warm_welcome&utm_term=2023-01-08#recent


