export default function Post() {
  return (
    <div className='w-full pt-[120px]'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='border-solid rounded-md p-4 shadow-md my-5 bg-slate-300'>
          <h2>{title}</h2>

          <ReactMarkdown
            className='whitespace-pre-wrap py-8'
            remarkPlugins={[remarkBreaks, remarkGfm]}
          >
            {text}
          </ReactMarkdown>

          <div className='flex justify-between'>
            <form
              action='/api/delete'
              method='DELETE'
              onClick={handleDelete}
              title='Delete'
              className='py-1 px-1 w-fit bg-slate-200 rounded-md cursor-pointer'
            >
              <AiOutlineDelete size={20} className='mr-auto' />
            </form>
            <p className='text-end text-sm'>{dateFormatted}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
