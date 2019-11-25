using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LibraryApi.DAL;
using LibraryApi.Models;

namespace LibraryApi.Controllers
{
    [Route("api/rest/LibraryAccounts")]
    [ApiController]
    public class LibraryAccountsController : ControllerBase
    {
        private readonly LibraryContext _context;

        public LibraryAccountsController(LibraryContext context)
        {
            _context = context;
        }

        // GET: api/LibraryAccounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LibraryAccount>>> GetLibraryAccounts()
        {
            return await _context.LibraryAccounts.ToListAsync();
        }
        // GET: api/LibraryAccounts/AccountInfo
        [HttpGet]
        [Route("GetAccountsInfo")]
        public async Task<ActionResult<IEnumerable<AccountInfo>>> GetAccountsInfo()
        {
            var accountsInfo = await _context.LibraryAccounts.Select(x => new AccountInfo
            {
                AccountID = x.AccountID,
                AccountData = $"{x.AccountNumber}|{x.FirstName}|{x.SurName}"
            }
            ).ToListAsync();

            return accountsInfo;
        }

        // GET: api/LibraryAccounts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LibraryAccount>> GetLibraryAccount(int id)
        {
            var libraryAccount = await _context.LibraryAccounts.FindAsync(id);

            if (libraryAccount == null)
            {
                return NotFound();
            }

            return libraryAccount;
        }

        // PUT: api/LibraryAccounts/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLibraryAccount(int id, LibraryAccount libraryAccount)
        {
            if (id != libraryAccount.AccountID)
            {
                return BadRequest();
            }

            _context.Entry(libraryAccount).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LibraryAccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/LibraryAccounts
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<LibraryAccount>> PostLibraryAccount(LibraryAccount libraryAccount)
        {
            _context.LibraryAccounts.Add(libraryAccount);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLibraryAccount", new { id = libraryAccount.AccountID }, libraryAccount);
        }

        // DELETE: api/LibraryAccounts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LibraryAccount>> DeleteLibraryAccount(int id)
        {
            var libraryAccount = await _context.LibraryAccounts.FindAsync(id);
            if (libraryAccount == null)
            {
                return NotFound();
            }

            _context.LibraryAccounts.Remove(libraryAccount);
            await _context.SaveChangesAsync();

            return libraryAccount;
        }

        private bool LibraryAccountExists(int id)
        {
            return _context.LibraryAccounts.Any(e => e.AccountID == id);
        }
    }
}
