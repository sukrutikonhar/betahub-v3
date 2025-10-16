import { Link } from "react-router-dom";
import { ROUTES } from "../router/routes";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center">
            <section className="w-full section-white">
                <div className="section-container section-padding-lg">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-core-purple mb-6">404</h1>
                        <h2 className="text-4xl font-bold text-dark-gray mb-4">Page Not Found</h2>
                        <p className="text-xl text-muted-purple mb-8 max-w-2xl mx-auto">
                            Sorry, we couldn't find the page you're looking for.
                        </p>
                        <Link to={ROUTES.HOME} className="btn-primary">
                            Go Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
