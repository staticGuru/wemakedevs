import clsx from 'clsx';
import SkeletonCard from 'components/SkeletonCard';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div
        className={clsx('layout')}
        style={{
          paddingBlock: '6rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <h2 className='h1'>Testimonials</h2>
        <hr className='styled-hr' />
      </div>
      <SkeletonCard
        tweetId={tweetId}
        options={{ theme: 'dark', conversation: 'none' }}
      />
    </section>
  );
};

export default Testimonials;

const tweetId = [
  '1620824479395090435',
  '1620081639199244288',
  '1620489706994806785',
  '1620828035804184579',
  '1617535692497883138',
  '1487399069383155716',
  '1544248976664567811',
];
