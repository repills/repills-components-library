import { types } from 'repills-config';

export default function(resources, relative) {
  const sourcesCount = resources.length;
  let maxNumberPerType = 1;
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

      if (relative && stats[elemIndex].count > maxNumberPerType) {
        maxNumberPerType = stats[elemIndex].count;
      }
    }

    return stats;
  }, []);

  stats.map(item => {

    const typeConfig = types[item.type];
    const sourceCountBase = relative ? maxNumberPerType : sourcesCount;
    item.percentage = Math.round(item.count * 100 / sourceCountBase);
    item.label = typeConfig.label[item.count === 1 ? 'singular' : 'plural'];
    item.color = typeConfig.color;

    return item;
  });

  // stats.sort((a, b) => b.count - a.count);

  return stats;
};
