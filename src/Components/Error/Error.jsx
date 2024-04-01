import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <>
            <div id="layoutError">
                <div id="layoutError_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="text-center mt-4">
                                        <img className="mb-4 img-error" src="images/error-404-monochrome.svg" />
                                        <p className="lead">This requested URL was not found on this server.</p>
                                        <Link href="/">
                                            <i className="fas fa-arrow-left me-1"></i>
                                            Return to Dashboard
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
