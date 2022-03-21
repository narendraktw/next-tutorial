import { useRouter } from 'next/router';
//catch all routes
const Docs = () => {
	const router = useRouter();
	const { params = [] } = router.query;
	if (params.length === 2) {
		return (
			<h1>
				Viewing docs for feature {params[0]} and concept {params[1]}
			</h1>
		);
	} else if (params.length === 1) {
		return <h1>Viewing docs for feature {params[0]}</h1>;
	}
	return <div>Docs Home page</div>;
};

export default Docs;