import moment from 'moment';

// The date should be in the format: DD/MM/YYYY HH:MM:SS

const getTimeAgo = (createdAt: string) => {
  const target = createdAt.toLocaleString();
  const diff = moment(target, 'DD/MM/YYYY HH:mm:ss').diff(
    moment(new Date().toLocaleString(), 'DD/MM/YYYY HH:mm:ss'),
  );
  const days = Math.abs(moment.duration(diff).asDays());

  if (days < 1) {
    return 'Há pouco Tempo';
  }
  if (days > 365) {
    return 'Há ' + (days / 365).toFixed() + ' anos';
  }
  if (days > 30) {
    return 'Há ' + (days / 30).toFixed() + ' meses';
  }

  return 'Há ' + days.toFixed() + ' dias';
};

export default getTimeAgo;
