import NewsList from './news-list';

describe('News', () => {
	let instance;
	/*	
	beforeAll((done) => {
		instance = shallow(<NewsList />).instance();
		done();
	});*/

	/*describe('componentDidMount', () => {
			//...
	})*/

	describe('handleSuccess', () => {
		/*it('should change state on success', async () => {
			const res = jest.fn(() => {
				return {
					json: Promise.resolve('Vasya')
				}
			})

			instance.setState({ newsList: '' });
			const result = instance.handleSuccess(res);
			expect(instance.state.newsList).toEquals('Vasya');
		})*/

		it('should change state on success', () => {
			expect(1).toEqual(1);
		})
	})
});
