const img = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`

export const initialPhotos = [
  { id: 1, url: img(1024993), category: 'reject', title: 'Shoreline portrait', moment: 'Directed couple portrait', explanation: 'The sunset composition is beautiful, but the distant, directed portrait is less aligned with your preference for close candid emotion.' },
  { id: 2, url: img(1444442), category: 'review', title: 'Hands joined', moment: 'Cultural ceremony ritual', explanation: 'This close view of hennaed hands records a meaningful ritual, though its detail-focused composition deserves a final human review.' },
  { id: 3, url: img(1779414), category: 'review', title: 'Gathered for the vows', moment: 'Outdoor ceremony wide shot', explanation: 'The full ceremony scene adds valuable context, but faces and emotion are less visible from this distance.' },
  { id: 4, url: img(20892660), category: 'keep', title: 'Joy in motion', moment: 'Newlyweds laughing', explanation: 'Natural laughter and movement create the kind of honest, unscripted frame your brief prioritizes.' },
  { id: 5, url: img(15530657), category: 'keep', title: 'The room erupts', moment: 'Friends laughing at the reception', explanation: 'A warm, unposed reaction from the couple and their friend gives this frame authentic emotional storytelling.' },
  { id: 6, url: img(1024960), category: 'reject', title: 'Twilight walk', moment: 'Silhouetted beach portrait', explanation: 'Atmospheric and polished, but the distant silhouette reveals less emotion than the strongest candid frames.' },
  { id: 7, url: img(3014856), category: 'reject', title: 'Under the string lights', moment: 'Posed couple portrait', explanation: 'The lighting and composition are strong, but this carefully directed portrait is less aligned with your candid preference.' },
  { id: 8, url: img(3292697), category: 'keep', title: 'Sparkler kiss', moment: 'Couple surrounded by friends', explanation: 'Recommended because it combines genuine celebration, community, and an emotionally charged unscripted moment.' },
  { id: 9, url: img(24181537), category: 'keep', title: 'A mother’s touch', moment: 'Bride and mother holding hands', explanation: 'Recommended because this quiet mother-daughter connection directly matches your priority for meaningful family emotion.' },
  { id: 10, url: img(169193), category: 'reject', title: 'Seaside reception table', moment: 'Floral table setting', explanation: 'The coastal table styling is useful context, but it carries less emotional value than the people-focused moments you selected.' },
  { id: 11, url: img(265722), category: 'reject', title: 'Veil from above', moment: 'Overhead couple portrait', explanation: 'A striking editorial composition, though its highly directed setup is less aligned with authentic candid storytelling.' },
  { id: 12, url: img(169190), category: 'reject', title: 'Pink centerpieces', moment: 'Reception table detail', explanation: 'The floral arrangements establish the reception style, but this decorative detail ranks below emotional interactions.' },
  { id: 13, url: img(1616113), category: 'reject', title: 'The reception room', moment: 'Indoor table setting', explanation: 'A useful room-detail photograph, but it contains no human connection and is lower priority for this edit.' },
  { id: 14, url: img(265920), category: 'reject', title: 'Places are set', moment: 'Reception place settings', explanation: 'This clean documentation of the tables is helpful for completeness but not central to the emotional story.' },
  { id: 15, url: img(587741), category: 'reject', title: 'Dessert display', moment: 'Wedding food and sweets', explanation: 'The colorful dessert table records a reception detail, but it does not match your preference for candid people and family connection.' },
  { id: 16, url: img(1488312), category: 'reject', title: 'The dip', moment: 'Directed kiss portrait', explanation: 'This photograph is technically strong, but its formal pose is less aligned with your stated preference for candid moments.' },
  { id: 17, url: img(1345574), category: 'reject', title: 'Cutting the cake', moment: 'Traditional reception event', explanation: 'The cake-cutting tradition is documented clearly, though this frame has less natural expression than the recommended set.' },
  { id: 18, url: img(2959192), category: 'reject', title: 'Bouquet portrait', moment: 'Floral and attire detail', explanation: 'The bouquet and wedding attire are beautifully shown, but this detail-focused frame carries limited emotional storytelling.' },
  { id: 19, url: img(2060240), category: 'reject', title: 'Ceremony from behind', moment: 'Traditional wedding ritual', explanation: 'The ritual is important, but the rear angle obscures expression and makes the moment less emotionally immediate.' },
  { id: 20, url: img(2253842), category: 'review', title: 'The ring exchange', moment: 'Close ceremony moment', explanation: 'The ring exchange is narratively important and shows connection, though the composed framing deserves a final review.' },
  { id: 21, url: img(17529979), category: 'keep', title: 'Everyone breaks', moment: 'Newlyweds laughing with friends', explanation: 'Recommended because the couple and friends are laughing naturally—the clearest expression of the candid energy you selected.' },
  { id: 22, url: img(6609726), category: 'reject', title: 'The family lineup', moment: 'Formal portrait with parents', explanation: 'This is valuable documentation, but the arranged family pose is less aligned with your preference for natural interaction.' },
  { id: 23, url: img(34584733), category: 'review', title: 'Walking in together', moment: 'Bride entering with her parents', explanation: 'The family context is deeply meaningful, though the formal processional moment is placed in Review for your final judgment.' },
  { id: 24, url: img(931796), category: 'reject', title: 'Reflections on the shore', moment: 'Directed beach portrait', explanation: 'The wide reflection and dramatic sky are visually strong, but the distant posed composition reveals little candid emotion.' },
]

export const comparisons = [
  {
    prompt: 'Which moment feels more essential?',
    options: [
      { id: 'candid-emotion', url: img(24181537), label: 'Candid emotion', note: 'A bride and her mother holding hands' },
      { id: 'posed-portrait', url: img(1488312), label: 'Classic portrait', note: 'A composed, traditional frame' },
    ],
  },
  {
    prompt: 'Which image belongs in the final story?',
    options: [
      { id: 'natural-laughter', url: img(17529979), label: 'Natural laughter', note: 'Newlyweds laughing with friends' },
      { id: 'formal-group', url: img(6609726), label: 'Formal group', note: 'A carefully arranged family portrait' },
    ],
  },
  {
    prompt: 'What would you give more weight?',
    options: [
      { id: 'family-interaction', url: img(34584733), label: 'Family connection', note: 'A bride entering with her parents' },
      { id: 'decorative-detail', url: img(169190), label: 'Decorative detail', note: 'Reception florals and table styling' },
    ],
  },
]

export const fallbackImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'%3E%3Crect width='1200' height='900' fill='%23e7e1d5'/%3E%3Ccircle cx='600' cy='390' r='105' fill='%23b79a5e' opacity='.35'/%3E%3Cpath d='M360 680l180-190 125 125 85-85 145 150z' fill='%23103f32' opacity='.85'/%3E%3Ctext x='600' y='775' text-anchor='middle' font-family='Georgia,serif' font-size='42' fill='%23103f32'%3ESelectIQ Collection%3C/text%3E%3C/svg%3E"
