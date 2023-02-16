import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

export default function NewPostPreview({ title, text }) {
  return (
    <div className='p-10 bg-slate-300 w-[50%] rounded-md overflow-scroll h-[100%]'>
      <h2>{title}</h2>
      <ReactMarkdown
        className='whitespace-pre-wrap py-8'
        remarkPlugins={[remarkBreaks, remarkGfm]}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
