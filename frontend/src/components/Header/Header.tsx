import * as React from 'react';
// import SwipeableViews from 'react-swipeable-views';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, IconButton, Toolbar} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

// const AntTabs = styled(Tabs)({
// 	borderBottom: '1px solid #e8e8e8',
// 	'& .MuiTabs-indicator': {
// 		backgroundColor: '#1890ff',
// 	},
// });
//
// const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
// 	({ theme }) => ({
// 		textTransform: 'none',
// 		minWidth: 0,
// 		[theme.breakpoints.up('sm')]: {
// 			minWidth: 0,
// 		},
// 		fontWeight: theme.typography.fontWeightRegular,
// 		marginRight: theme.spacing(1),
// 		color: 'rgba(0, 0, 0, 0.85)',
// 		fontFamily: [
// 			'-apple-system',
// 			'BlinkMacSystemFont',
// 			'"Segoe UI"',
// 			'Roboto',
// 			'"Helvetica Neue"',
// 			'Arial',
// 			'sans-serif',
// 			'"Apple Color Emoji"',
// 			'"Segoe UI Emoji"',
// 			'"Segoe UI Symbol"',
// 		].join(','),
// 		'&:hover': {
// 			color: '#40a9ff',
// 			opacity: 1,
// 		},
// 		'&.Mui-selected': {
// 			color: '#1890ff',
// 			fontWeight: theme.typography.fontWeightMedium,
// 		},
// 		'&.Mui-focusVisible': {
// 			backgroundColor: '#d1eaff',
// 		},
// 	}),
// );


interface StyledTabsProps {
	children?: React.ReactNode;
	value: string;
	onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
	<Tabs
		{...props}
		TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
	/>
))({
	// '& .MuiTabs-root': {
	// 	height: '100%',
	// },
	'& .MuiTabs-indicator': {
		height: 5,
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	'& .MuiTabs-indicatorSpan': {
		width: '100%',
		backgroundColor: '#FE8D20',
	},
});

interface StyledTabProps {
	label: string;
	value?: string;
}

const StyledTab = styled((props: StyledTabProps) => (
	<Tab disableRipple {...props} />
))(({ theme }) => ({
	textTransform: 'none',
	fontWeight: theme.typography.fontWeightRegular,
	fontSize: theme.typography.pxToRem(15),
	marginRight: theme.spacing(1),
	color: 'rgba(255, 255, 255, 0.7)',
	'&.Mui-selected': {
		color: '#fff',
	},
	'&.Mui-focusVisible': {
		backgroundColor: '#FE8D20',
	},
}));

// interface TabPanelProps {
// 	children?: React.ReactNode;
// 	dir?: string;
// 	index: number;
// 	value: number;
// }
//
// function TabPanel(props: TabPanelProps) {
// 	const { children, value, index, ...other } = props;
//
// 	return (
// 		<div
// 			role="tabpanel"
// 			hidden={value !== index}
// 			id={`full-width-tabpanel-${index}`}
// 			aria-labelledby={`full-width-tab-${index}`}
// 			{...other}
// 		>
// 			{value === index && (
// 				<Box sx={{ p: 3 }}>
// 					<Typography>{children}</Typography>
// 				</Box>
// 			)}
// 		</div>
// 	);
// }



const Header: React.FC = () => {

	// const { pathname } = useLocation();
	const navigate = useNavigate();

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		navigate(newValue);
	};


	// const theme = useTheme();
	//
	// const handleChangeIndex = (index: number) => {
	// 	setValue(index);
	// };

	return (
		<Box sx={{ width: '100%' }}>
			<AppBar sx={{ bgcolor: '#3392E5' }} position="static" color="primary" enableColorOnDark>
				<Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
					{/*<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>*/}
					{/*	<MenuIcon />*/}
					{/*</IconButton>*/}
					{/*<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>*/}
					{/*	Label*/}
					{/*</Typography>*/}
					<Box sx={{ bgcolor: '#3392E5' }}>
						<StyledTabs
							value={location.pathname}
							// value={pageIndex}
							// onChange={(value: number) => setNewPageIndex(value)}
							onChange={handleChange}
						>
							<StyledTab label='Тесты' value='/tests' />
							<StyledTab label='Задания' value='/tasks'/>
							<StyledTab label='Магазин' value='/shop'/>
							<StyledTab label='Коллеги' value='/coworkers'/>
						</StyledTabs>
					</Box>

					<div>
						<IconButton>
							<NotificationsIcon fontSize='large' sx={{ color: 'white' }} />
						</IconButton>

						<IconButton onClick={() => navigate('/account')}>
							<AccountCircle fontSize='large' sx={{ color: 'white' }} />
						</IconButton>
					</div>
				</Toolbar>


			</AppBar>

			{/*<Box sx={{ bgcolor: '#3392E5' }}>*/}
			{/*	<StyledTabs*/}
			{/*		value={value}*/}
			{/*		onChange={handleChange}*/}
			{/*	>*/}
			{/*		<StyledTab label="Workflows" />*/}
			{/*		<StyledTab label="Datasets" />*/}
			{/*		<StyledTab label="Connections" />*/}
			{/*	</StyledTabs>*/}
			{/*	<Box sx={{ p: 3 }} />*/}
			{/*</Box>*/}

			{/*<SwipeableViews*/}
			{/*	axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}*/}
			{/*	index={value}*/}
			{/*	onChangeIndex={handleChangeIndex}*/}
			{/*>*/}
			{/*	<TabPanel value={value} index={0} dir={theme.direction}>*/}
			{/*		Item One*/}
			{/*	</TabPanel>*/}
			{/*	<TabPanel value={value} index={1} dir={theme.direction}>*/}
			{/*		Item Two*/}
			{/*	</TabPanel>*/}
			{/*	<TabPanel value={value} index={2} dir={theme.direction}>*/}
			{/*		Item Three*/}
			{/*	</TabPanel>*/}
			{/*</SwipeableViews>*/}
		</Box>
	);
};

export default Header;
