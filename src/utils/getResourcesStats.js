import { types } from 'repills-config';

export default function(resources) {
  const sourcesCount = resources.length;
  const stats = resources.reduce((stats, resource) => {

    const type = resource.frontmatter.type[0];
    const elemIndex = stats.findIndex(e => e.type === type);

    if (elemIndex === -1) {
      stats.push({
        type,
        count: 1
      });
    } else {
      stats[elemIndex].count += 1;
    }

    return stats;
  }, []);

  stats.map(item => {

    const typeConfig = types[item.type];
    item.percentage = Math.round(item.count * 100 / sourcesCount);
    item.label = typeConfig[item.count === 1 ? 'singular' : 'plural'];
    item.color = typeConfig.color;

    return item;
  });

  stats.sort((a, b) => b.count - a.count);

  return stats;
};
