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
		desc: '视频剪辑、批量制作与叙事节奏探索',
		tag: 'PR / 剪映',
		icon: 'lucide:film',
		color: '#ec4899',
		link: '/projects/video',
	},
	{
		slug: 'graphic',
		title: '平面视觉设计',
		desc: '海报、封面、图标与设计',
		tag: 'PS / AI',
		icon: 'lucide:pen-tool',
		color: '#f59e0b',
		link: '/projects/graphic',
	},
	{
		slug: 'ui',
		title: 'UI 界面设计',
		desc: 'APP 界面、网页与设计',
		tag: 'UI / UX',
		icon: 'lucide:layout',
		color: '#8b5cf6',
		link: '/suitanglianxi',
	},
	{
		slug: 'painting',
		title: '手绘',
		desc: '色彩构成与素描',
		tag: '绘画',
		icon: 'lucide:brush',
		color: '#06b6d4',
		link: '/huihua',
	},
	{
		slug: 'molly',
		title: 'MOLLY拾色之旅',
		desc: '木疙瘩 H5 互动游戏',
		tag: 'H5 游戏',
		icon: 'lucide:gamepad-2',
		color: '#f472b6',
		link: '/game/index.html',
	},
];
