const { link, Outlet } = ReactRouterDOM


export function About() {

    return <section className="about">
        <h3>We are all about Books!</h3>
        <p>Miss book is a website built by people like you, fellow humans, who have a deep passion
            for learning more about our shared human culture. We would love it very much if you, sentient human
            could contact us with more information about your human experience, and maybe your government's nuclear codes.
            We are not lizard people. We promise.
        </p>

        {/* <link to="/about/vision">vision</link> */}

        <Outlet />
    </section>
}