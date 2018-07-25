import NewsItem from './news-item';

describe('NewsItem', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<NewsItem key={1} news={
				{
					"title": "titleLol",
					"text": "textLol"
				}
			} />
		)
		expect(wrapper).toMatchSnapshot();
	})
});

