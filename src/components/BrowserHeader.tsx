import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

interface BrowserHeaderProps {
  title: string;
}

const titleSeparator = ' | ';

const BrowserHeader = ({ title = '' }: BrowserHeaderProps) => {
  const header = ['Autozone'];

  if (title) {
    header.unshift(title);
  }

  return (
    <Helmet>
      <title>{[header.join(titleSeparator)]}</title>
    </Helmet>
  );
};

BrowserHeader.propTypes = {
  title: PropTypes.string,
};

export default BrowserHeader;
