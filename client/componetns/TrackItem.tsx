import React from 'react';
import { ITrack } from '../types/track';
import { Card, Grid } from '@mui/material';
import styles from '../styles/TrackItem.module.scss';
import IconButton from '@mui/material/IconButton';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface TrackItemProps {
	track: ITrack;
	active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
	const router = useRouter();

	return (
		<Card
			className={styles.track}
			onClick={() => router.push('/tracks/' + track._id)}
		>
			{track.name}
			<IconButton onClick={(e) => e.stopPropagation()}>
				{active ? <Pause /> : <PlayArrow />}
			</IconButton>
			<img
				src={track.picture}
				width={70}
				height={70}
				alt='track picture'
			/>
			<Grid
				container
				direction='column'
				style={{ width: 200, margin: '0 20px' }}
			>
				<div>{track.name}</div>
				<div style={{ fontSize: 12, color: 'gray' }}>
					{track.artist}
				</div>
			</Grid>
			{active && <div>02:42 / 03:22</div>}
			<IconButton
				onClick={(e) => e.stopPropagation()}
				style={{ marginLeft: 'auto' }}
			>
				<Delete />
			</IconButton>
		</Card>
	);
};

export default TrackItem;