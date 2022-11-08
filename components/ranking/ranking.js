import Image from 'next/image';
import styles from './ranking.module.css';

export default function Ranking() {
  const ranks = [
    { 'image': 'green_rank.svg', 'name': 'Green' },
    { 'image': 'purple_rank.svg', 'name': 'Purple' },
    { 'image': 'pink_rank.svg', 'name': 'Pink' },
    { 'image': 'black_rank.svg', 'name': 'Black' },
    { 'image': 'locked_rank.svg', 'name': 'Locked' },
  ];

  const users = [
    { 'name': 'Gabriel Navevaiko', 'profile': '/images/profile_picture.jpg', 'chest': 'gold_chest.svg' },
    { 'name': 'Gabriel Navevaiko', 'profile': '/images/profile_picture.jpg', 'chest': 'silver_chest.svg' },
    { 'name': 'Gabriel Navevaiko', 'profile': '/images/profile_picture.jpg', 'chest': 'bronze_chest.svg' },
    { 'name': 'Gabriel Navevaiko', 'profile': '/images/profile_picture.jpg', 'chest': '' },
    { 'name': 'Gabriel Navevaiko', 'profile': '/images/profile_picture.jpg', 'chest': '' },
    { 'name': 'Gabriel Navevaiko', 'profile': '/images/profile_picture.jpg', 'chest': '' },
    { 'name': 'Gabriel Navevaiko', 'profile': '/images/profile_picture.jpg', 'chest': '' },
    { 'name': 'Gabriel Navevaiko', 'profile': '/images/profile_picture.jpg', 'chest': '' },
    { 'name': 'Gabriel Navevaiko', 'profile': '/images/profile_picture.jpg', 'chest': '' },
    { 'name': 'Gabriel Navevaiko', 'profile': '/images/profile_picture.jpg', 'chest': '' },
    { 'name': 'Gabriel Navevaiko', 'profile': '/images/profile_picture.jpg', 'chest': '' },
    { 'name': 'Gabriel Navevaiko', 'profile': '/images/profile_picture.jpg', 'chest': '' },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.rankingHeader}>
        <div className={styles.rankingInfoContainer}>
          <h1 className={styles.rankingTitle}> Divisão Obsidiana </h1> 
          <Image
            src='/images/info_icon.svg'
            width='15px'
            height='15px'
            alt='Info'
          />
          <span className={styles.rankingFinalDay}> 2 dias </span>
        </div>

        <div className={styles.ranks}>
          {ranks.map(({ image, name }) => (
            <Image
              key={name} 
              src={`/images/${image}`}
              height='60px'
              width='60px'
              alt={name}
            />
          ))}
        </div>
      </div>
      
      <div className={styles.rankContent}>
        {users.map((user, index) => (
          <>
            <div key={index} className={styles.userContainer}>
              <span> {index + 1} </span>
                
              <div className={styles.userImage}>
                <Image 
                  src={user.profile}
                  layout='fill'
                  alt={user.name}
                />
              </div>

              <h2> {user.name} </h2>

              <div className={styles.chestRank}>
                {user.chest !== '' && 
                  <Image 
                    layout='fill'
                    src={`/images/${user.chest}`}
                    alt='Chest'
                  />
                }
              </div>

              <h3 className={styles.experience}> 286px </h3>
            </div>

            {index === 4 && 
              <div className={styles.promotionZone}>
                <div className={styles.promotionIcon}>
                  <Image 
                    src='/images/up_arrow.svg'
                    layout='fill'
                    alt='Up'
                  />
                </div>

                Zona de Promoção

                <div className={styles.promotionIcon}>
                  <Image 
                    src='/images/up_arrow.svg'
                    layout='fill'
                    alt='Up'
                  />
                </div>
              </div>  
            }
          </>
        ))}
      </div>
    </div>
  );
}