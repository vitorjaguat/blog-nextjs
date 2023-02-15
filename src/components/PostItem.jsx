import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

export default function PostItem({ title, text }) {
  return (
    <div className='border-solid rounded-md p-4 shadow-md my-5 bg-slate-300'>
      <h2>{title}</h2>
      <div className='py-4'></div>
      <ReactMarkdown
        // children={text}
        className='whitespace-pre-wrap'
        remarkPlugins={[remarkBreaks, remarkGfm]}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
