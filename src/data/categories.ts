export interface Category {
	slug: string;
	title: string;
	desc: string;
	tag: string;
	icon: string;
	color: string;
	link: string;
}

export const categories: Category[] = [
	{
		slug: 'video',
		title: '短视频剪辑',
		desc: '账号运营、批量剪辑与叙事节奏探索',
		tag: 'PR / 剪映',
		icon: 'lucide:film',
		color: '#ec4899',
		link: '/projects/video',
	},
	{
		slug: 'graphic',
		title: '平面视觉设计',
		desc: '海报、封面、图标与视觉排版',
		tag: 'PS / AI',
		icon: 'lucide:pen-tool',
		color: '#f59e0b',
		link: '/projects/graphic',
	},
	{
		slug: 'ui',
		title: 'UI 界面设计',
		desc: 'APP 界面、网页与设计练习',
		tag: 'UI / UX',
		icon: 'lucide:layout',
		color: '#8b5cf6',
		link: '/suitanglianxi',
	},
	{
		slug: '3d',
		title: '三维基础创作',
		desc: '3D 建模与基础渲染练习',
		tag: '3dmax / Maya',
		icon: 'lucide:box',
		color: '#10b981',
		link: '/projects/3d',
	},
	{
		slug: 'painting',
		title: '绘画习作',
		desc: '水彩与数码板绘练习',
		tag: '绘画',
		icon: 'lucide:brush',
		color: '#06b6d4',
		link: '/huihua',
	},
	{
		slug: 'h5',
		title: 'H5',
		desc: '交互类游戏',
		tag: 'H5',
		icon: 'lucide:sparkles',
		color: '#f472b6',
		link: '/lianxi',
	},
];
