import React from 'react'

function BsFooter() {
    return (
        <>
            <footer className="bg-dark text-light py-4 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-0">&copy; 2024 Your Company Name. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <a href="#" className="text-light mx-2">Facebook</a>
                            <a href="#" className="text-light mx-2">Twitter</a>
                            <a href="#" className="text-light mx-2">Instagram</a>
                            <a href="#" className="text-light mx-2">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default BsFooter